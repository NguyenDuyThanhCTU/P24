import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-mainColorHover">
      <div className="grid grid-cols-4 w-[1200px] mx-auto text-white py-10 gap-10">
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            Giờ làm việc
          </h2>
          <div>
            <div className="flex items-center gap-2">
              <AiOutlineClockCircle className="" />

              <h2>Thời gian làm việc:</h2>
            </div>
            <p className="font-semibold">7:00 - 17:00</p>
          </div>
        </div>
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            thông tin liên hệ
          </h2>
          <div>
            {" "}
            <div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="" />

                <h2>Địa chỉ chúng tôi:</h2>
              </div>
              <p className="font-semibold">address</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <SiGmail className="" />

                <h2>Email chúng tôi:</h2>
              </div>

              <p className="font-semibold">gmail</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BsPhone className="" />

                <h2>Điện thoại:</h2>
              </div>
              <p className="font-semibold"></p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            Bài Viết
          </h2>
          <div></div>
        </div>
        <div>
          <h2 className="uppercase pb-1 border-b-2 w-full border-mainColor font-normal text-[20px]">
            Liên Kết Fanpage{" "}
          </h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
