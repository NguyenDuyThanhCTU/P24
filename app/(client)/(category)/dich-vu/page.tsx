import PostCategory from "@components/client/Home/Posts/PostCategory";
import { convertDate } from "@components/items/Handle";
import { getData } from "@lib/Get";
import { find } from "@lib/api";

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Trang Chủ - Nha khoa thẩm mỹ Trần Húy",
  description: "Trần Húy - Nha khoa thẩm mỹ uy tín tại Cần Thơ",
};

const ServicePage = async () => {
  const FetchData: any = await find("Posts");
  const Data = FetchData.filter((item: any) => item.level0 === "Dịch Vụ");

  return (
    <>
      <div className="p:col-auto d:col-span-5">
        <div className="font-LexendDeca font-extralight ">
          <h1 className="text-[28px] font-semibold">
            Các dịch vụ của nha khoa Trần Húy
          </h1>
          <div className="flex flex-col gap-8">
            {Data.map((item: any, idx: number) => {
              const Date = convertDate(item?.createdAt);
              const markup = { __html: item?.content };
              return (
                <div key={idx} className="hover:bg-gray-100 duration-300">
                  <div className="grid grid-cols-3 gap-5 p-2">
                    <Link href={`/bai-viet/${item.url}`}>
                      <div className="w-full overflow-hidden">
                        <img
                          src={item.image}
                          alt="news"
                          className="w-full h-full hover:scale-110 duration-300"
                        />
                      </div>
                    </Link>
                    <div className="col-span-2">
                      <Link href={`/bai-viet/${item.url}`}>
                        <h2 className="font-normal hover:text-blue-400 duration-300">
                          {item.title}
                        </h2>
                        <p className="text[15px] text-gray-400">{Date}</p>
                      </Link>

                      <div
                        dangerouslySetInnerHTML={
                          markup
                            ? markup
                            : {
                                __html: "",
                              }
                        }
                        className="truncate2 text-[14px] mt-2"
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
