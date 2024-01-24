import Contact from "@components/client/Contact/Contact";
import { getData } from "@lib/Get";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang Chủ - Nha khoa thẩm mỹ Trần Húy",
  description: "Trần Húy - Nha khoa thẩm mỹ uy tín tại Cần Thơ",
};

const ContactPage = async () => {
  const HeaderData: any = await find("Config");
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
