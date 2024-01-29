import { find, findById } from "@lib/api";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

const IntroductionPage = async () => {
  const Data = await findById("Posts", "introductory");
  const Image = Data?.image;
  const markup = { __html: Data?.content };
  return (
    <>
      <div
        className={`w-[100vw] p:h-[30vh] d:h-[700px] bg-center  bg-no-repeat bg-contain`}
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.16)]"></div>
      </div>
      <div>
        <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
          <div className="border-b pb-2">
            <div className="uppercase font-bold text-[1.5rem] ">
              <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
                Tại sao Mọi người nên lựa chọn Nha Khoa thẩm mỹ Trần Húy?
              </div>
            </div>
            <div className="text-center">{Data?.shortDescription}</div>
          </div>
          <div className="py-5 font-normal text-[25px] uppercase underline">
            Bảng Giá Dịch Vụ Nha Khoa Thẩm Mỹ Trần Húy
          </div>
          <div
            dangerouslySetInnerHTML={markup ? markup : { __html: "Loading..." }}
            className="text-[18px] ck-content"
          ></div>
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
