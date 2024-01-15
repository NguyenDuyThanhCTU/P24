import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@config/Firebase";
import { notification } from "antd";

export const delDocument = async (CollectionName: string, id: string) => {
  try {
    await deleteDoc(doc(db, CollectionName, id)).then(() => {
      notification.success({
        message: "Thành công!",
        description: `Xóa thành công!`,
      });
    });
  } catch (error) {
    notification.error({
      message: "Thất bại!",
      description: `Mã lỗi: ${error}`,
    });
  }
};
