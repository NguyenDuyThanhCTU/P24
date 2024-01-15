import {
  collection,
  getDoc,
  getDocs,
  query,
  doc,
  orderBy,
  Timestamp,
  limitToLast,
} from "firebase/firestore";

import { db } from "@config/Firebase";

export const getDataById = async (Collection: string, documentId: string) => {
  try {
    const docRef = doc(db, Collection, documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      console.log("Document not found.");
      return null;
    }
  } catch (error) {
    console.error("Error get document by ID: ", error);
    throw error;
  }
};

export const getData = async (Collection: string) => {
  try {
    const q = query(collection(db, Collection), orderBy("createdAt"));
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
      const createdAt = doc.data().createdAt.toDate();
      const serverTime = Timestamp.now().toDate();

      const timeDiff = serverTime.getTime() - createdAt.getTime();
      const daysDiff = Math.round(timeDiff / 86400000);

      data.push({ id: doc.id, ...doc.data(), daysSinceCreation: daysDiff });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const getDataLimit = async (Collection: string, limit: number) => {
  try {
    const q = query(
      collection(db, Collection),
      orderBy("createdAt"),
      limitToLast(limit)
    );
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
      const createdAt = doc.data().createdAt.toDate();
      const serverTime = Timestamp.now().toDate();

      const timeDiff = serverTime.getTime() - createdAt.getTime();
      const daysDiff = Math.round(timeDiff / 86400000);

      data.push({ id: doc.id, ...doc.data(), daysSinceCreation: daysDiff });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

// add new document to collection

import { DB_URL } from "@assets/item";

export async function getData1(CollectionName: string, Document?: string) {
  let firebaseEndpoint: string;

  if (Document) {
    firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/${DB_URL}/databases/(default)/documents/${CollectionName}/${Document}`;
  } else {
    firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/${DB_URL}/databases/(default)/documents/${CollectionName}`;
  }

  try {
    const response = await fetch(firebaseEndpoint, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    if (Document) {
      return convertDocumentData(data.fields);
    } else {
      const documents = data.documents.map((doc: any) => {
        const formattedDoc: any = {
          id: doc.name.split("/").pop(),
        };

        for (const field in doc.fields) {
          if (Object.prototype.hasOwnProperty.call(doc.fields, field)) {
            formattedDoc[field] = convertFieldValue(doc.fields[field]);
          }
        }

        return formattedDoc;
      });

      return documents;
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    // throw new Error("Failed to fetch data.");
  }
}

interface getDataProps {
  CollectionName: string;
  Document?: string;
  numberOfItems?: number;
}

export async function getDataByField(CollectionName: string) {
  let firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/${DB_URL}/databases/(default)/documents/${CollectionName}/VS7Smr9m5OB3tuMzIGv4`;

  try {
    const response = await fetch(firebaseEndpoint, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();

    const documents = data.documents.map((doc: any) => {
      const formattedDoc: any = {
        id: doc.name.split("/").pop(),
      };

      for (const field in doc.fields) {
        if (Object.prototype.hasOwnProperty.call(doc.fields, field)) {
          formattedDoc[field] = convertFieldValue(doc.fields[field]);
        }
      }

      return formattedDoc;
    });

    return documents;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    // throw new Error("Failed to fetch data.");
  }
}

function convertDocumentData(fields: any): any {
  const convertedData: any = {};

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      convertedData[field] = convertFieldValue(fields[field]);
    }
  }

  return convertedData;
}

function convertFieldValue(field: any): any {
  if (field.stringValue !== undefined) {
    return field.stringValue;
  } else if (field.integerValue !== undefined) {
    return parseInt(field.integerValue, 10);
  } else if (field.timestampValue !== undefined) {
    return new Date(field.timestampValue);
  } else if (field.booleanValue !== undefined) {
    return field.booleanValue;
  } else if (field.arrayValue !== undefined) {
    return field.arrayValue.values.map((value: any) =>
      convertFieldValue(value)
    );
  } else if (field.mapValue !== undefined) {
    const mapData: any = {};
    for (const key in field.mapValue.fields) {
      if (Object.prototype.hasOwnProperty.call(field.mapValue.fields, key)) {
        mapData[key] = convertFieldValue(field.mapValue.fields[key]);
      }
    }
    return mapData;
  } else {
    // Handle other field types as needed
    return null;
  }
}
