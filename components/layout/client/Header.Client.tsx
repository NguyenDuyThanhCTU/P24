"use client";
import { HeaderItems } from "@assets/item";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretDown, FaFacebookF, FaPhone, FaSearch } from "react-icons/fa";
import { MdMailOutline, MdPhoneInTalk } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);

  // useEffect(() => {
  //   const sort = Products?.filter((product: any) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setSearchRs(sort);
  // }, [Products, search]);
  return (
    <>
      <div className="bg-mainColor">
        <div className="w-[1300px] mx-auto flex justify-between py-2 text-white text-[13px] items-center">
          <div className="text-wrap uppercase  font-normal">
            251 NGUYỄN VĂN CỪ – Q. NINH KIỀU – TP. CẦN THƠ - Hotline: (0292) 3
            899 104
          </div>
          <div className="flex gap-1 cursor-pointer">
            <FaFacebookF />
            <MdMailOutline />
            <MdPhoneInTalk />
          </div>
        </div>
      </div>
      <div className="shadow-xl">
        <div className="w-[1300px] mx-auto flex items-center justify-between py-2 h-[120px]">
          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/ads-company-285a6.appspot.com/o/avatar%2FLogo.png?alt=media&token=70b26cea-9173-4329-ad0a-6822b24a2ff1"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex h-full gap-5">
            {HeaderItems.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between h-full group cursor-pointer">
                  <div className="w-0 group-hover:w-full h-1 bg-mainColor  duration-300"></div>
                  <div className="font-normal uppercase text-gray-500 hover:text-black duration-300  text-[13px] flex items-center gap-1">
                    <p> {item.label}</p>
                    {item.children && <FaCaretDown className="text-[20px]  " />}
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {" "}
            <div>
              <div className=" relative bg-white py-3">
                <div className="border rounded-full bg-white border-mainGreen flex items-center ">
                  <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                    <input
                      type="text"
                      className="outline-none mr-2 col-span-6 text-mainGreen"
                      placeholder="Tìm kiếm"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div>
                      <div
                        className={`${
                          search ? "block" : "hidden"
                        }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                        onClick={() => setSearch("")}
                      >
                        <RxCross2 />
                      </div>
                    </div>
                  </div>
                  <div className="bg-mainColor py-3 px-6 text-white rounded-r-full cursor-pointer">
                    <FaSearch />
                  </div>
                </div>
                {search && (
                  <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                    <div className=" flex flex-col">
                      {searchRs.map((product: any, idx: number) => (
                        <Link
                          href={`$chi-tiet-san-pham/${product.url}`}
                          key={idx}
                          className="cursor-pointer p-2 hover:bg-gray-100"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
