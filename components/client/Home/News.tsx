import { convertDate } from "@components/items/Handle";
import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const HomeNews = ({ Data }: any) => {
  const DetailFirstPostDate = convertDate(Data[0]?.createdAt);
  const truncatedContent = Data[0]?.content
    ? Data[0]?.content.substring(0, 300)
    : "";
  const markupFirst = { __html: truncatedContent };
  return (
    <div className="bg-white py-10">
      <div className="d:w-[1440px]  p:w-auto d:mx-auto">
        <div className="font-bold text-[25px] pb-2 border-b-2 border-black w-full flex justify-between">
          <h2> TIN TỨC HẰNG NGÀY</h2>
          <Link
            href={`/chuyen-muc/dich-vu-thiet-ke-thi-cong`}
            className="flex items-center  hover:text-mainColor text-[18px] font-extralight cursor-pointer hover:scale-105 duration-300 "
          >
            <p>Xem thêm</p>
            <div className="p-2">
              <AiOutlineRight className="text-[16px]" />
            </div>
          </Link>
        </div>
        <div className="flex gap-4 mt-6 d:flex-row p:flex-col ">
          <div className="flex-1">
            <div className="overflow-hidden cursor-pointer">
              <img
                src={Data[0]?.image}
                alt="first post image"
                className="hover:scale-125 duration-1000"
              />
            </div>
            <div className="col-span-2 font-LexendDeca font-extralight mt-5">
              <Link href={`/tin-tuc/${Data[0]?.url}`}>
                <p className="text[15px]  ">
                  Nha khoa Trần Húy | {DetailFirstPostDate}
                </p>
                <h2 className="font-normal mt-2 hover:text-blue-400 duration-300 text-[20px]">
                  {Data[0]?.title}
                </h2>
              </Link>

              <div
                dangerouslySetInnerHTML={markupFirst}
                className=" text-[14px] truncate2 mt-2 font-normal"
              ></div>
            </div>
          </div>
          <div className="flex-1">
            {Data.slice(1, 6).map((item: any, idx: number) => {
              const DetailPostDate = convertDate(item?.createdAt);
              const content = item?.content;
              const maxLength = 200;

              const truncatedContent = content
                ? content.substring(0, maxLength)
                : "";

              const markup = { __html: truncatedContent };
              return (
                <div key={idx} className="hover:bg-gray-100 duration-300 py-2">
                  <div className="grid grid-cols-3 gap-5 p-2 pt-0">
                    <Link href={`/tin-tuc/${item.url}`}>
                      <div className="w-full overflow-hidden">
                        <img
                          src={item.image}
                          alt="news"
                          className="w-full h-full hover:scale-110 duration-300"
                        />
                      </div>
                    </Link>
                    <div className="col-span-2 ">
                      <Link href={`/tin-tuc/${item.url}`}>
                        <p className="text[15px]  ">
                          Nha khoa Trần Húy | {DetailPostDate}
                        </p>
                        <h2 className="font-normal mt-2 hover:text-blue-400 duration-300 text-[20px]">
                          {item.title}
                        </h2>
                      </Link>

                      <div
                        dangerouslySetInnerHTML={markup}
                        className="truncate2 text-[14px] mt-2 font-normal"
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
