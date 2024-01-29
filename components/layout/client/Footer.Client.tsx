"use client";
import { useData } from "@context/DataProviders";
import Image from "next/image";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Footer = ({ Data }: any) => {
  const { Posts } = useData();

  return (
    <div className="bg-mainColorHover">
      <div className="grid p:grid-cols-1 d:grid-cols-4 p:w-auto d:w-[1200px] p:mx-2 d:mx-auto text-white py-10 gap-10">
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            Giờ làm việc
          </h2>
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <AiOutlineClockCircle className="" />

              <h2>Thời gian làm việc:</h2>
            </div>
            <div className="flex mt-5">
              <div className="border-2 border-white">
                <div className="px-5 py-2">
                  <div>
                    <strong className="">
                      - Giờ làm việc từ thứ 2 đến thứ bảy:
                    </strong>
                    <div className="font-normal text-white">
                      <p>+ Sáng: 7 giờ - 11 giờ 30 phút</p>
                      <p>+ Chiều: 14 giờ - 19 giờ 30 phút</p>
                    </div>
                  </div>
                  <div>
                    <strong className="">
                      - Giờ làm việc Chủ nhật và ngày lễ:
                    </strong>
                    <div className="font-normal text-white">
                      <p>+ Sáng: 7 giờ - 11 giờ 30 phút</p>
                      <p>+ Chiều: 14 giờ - 18 giờ 00 phút</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            thông tin liên hệ
          </h2>
          <div className="mt-3">
            {" "}
            <div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="" />

                <h2 className="">Địa chỉ:</h2>
              </div>

              <p className="font-semibold">
                82-88 QLN2, Tân Mỹ, Đức Hòa, Long An
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <SiGmail className="" />

                <h2>Email:</h2>
              </div>

              <p className="font-semibold">phamtranhuy77@gmail.com</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BsPhone className="" />

                <h2>Điện thoại:</h2>
              </div>
              <p className="font-semibold">098 686 71 79</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            Bài Viết
          </h2>
          <div className="mt-3">
            {Posts?.slice(0, 4).map((item: any, idx: number) => (
              <div
                key={idx}
                className="  hover:bg-gray-100 hover:text-mainColor duration-300 cursor-pointer border-b-[1px] pb-2 hover "
              >
                <div className="p-2 flex items-center gap-3">
                  <div className="min-w-[50px] border-2  border-white">
                    <Image
                      src={item.image}
                      alt={`tin tuc #${idx}`}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="col-span-4 font-normal truncate2">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            Liên Kết Fanpage{" "}
          </h2>
          <div className="mt-3">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064151706616&tabs=timeline&width=300&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width={300}
              height={200}
              className="outline-none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
