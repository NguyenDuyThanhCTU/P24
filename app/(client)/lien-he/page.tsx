import Contact from "@components/client/Contact/Contact";
import { getData } from "@lib/Get";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Liên Hệ | Quảng Cáo, Cơ Khí Xây Dựng",
  description: "Hoàng Tuấn - Uy tín tạo niềm tin, Kiến tạo để vươn xa",
};

const ContactPage = async () => {
  const HeaderData = await getData("Config");
  const ContactData = HeaderData.find((item: any) => item.id === "contact");
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <>
          <Contact ContactData={ContactData} />
        </>
      </div>
    </div>
  );
};

export default ContactPage;
