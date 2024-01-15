import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@config/Firebase";

import { notification } from "antd";

export const UpdateDataProps = async (
  collectionName: string,
  id: string,
  newData: any
) => {
  try {
    newData.createdAt = serverTimestamp();
    await updateDoc(doc(db, collectionName, id), newData).then(() => {
      notification.success({
        message: "Thành công!",
        description: `Cập nhật thành công!`,
      });
    });
  } catch (err) {
    notification.error({
      message: "Thất bại!",
      description: `Mã lỗi: ${err}`,
    });
  }
};
