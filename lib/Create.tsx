import {
  collection,
  serverTimestamp,
  addDoc,

} from "firebase/firestore";
import { db } from "@config/Firebase";
import { notification } from "antd";

export const addData = async (Collection: string, data: any) => {
  data.createdAt = serverTimestamp();

  try {
    const collectionRef = collection(db, Collection);
    await addDoc(collectionRef, data).then(() => {
      notification.success({
        message: "Thành công!",
        description: `Thêm thành công!`,
      });
    });
  } catch (error) {
    notification.success({
      message: "Thất bại!",
      description: `Mã lỗi: ${error}`,
    });
  }
};
