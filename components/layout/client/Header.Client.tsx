"use client";
import { HeaderItems } from "@assets/item";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretDown, FaFacebookF, FaPhone, FaSearch } from "react-icons/fa";
import { MdMailOutline, MdPhoneInTalk } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import HeaderDropDown from "./HeaderDropdown";
import { useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { Drawer, Modal } from "antd";

const Header = ({ Data, Type }: any) => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const HandleNavigate = (url: any) => {
    setOpen(false);
    router.push(url);
  };
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="p:hidden d:block">
        <div className="bg-mainColor z-50">
          <div className="w-[1300px] mx-auto flex justify-between py-2 text-white text-[13px] items-center">
            <div className="text-wrap uppercase  font-normal">
              ĐC: {Data?.CompanyAddress} - Hotline: {Data?.Hotline}
            </div>
            <div className="flex gap-1 cursor-pointer">
              <FaFacebookF />
              <MdMailOutline />
              <MdPhoneInTalk />
            </div>
          </div>
        </div>
        <div className="shadow-xl bg-white">
          <div className="w-[1300px] mx-auto flex items-center justify-between py-2 h-[120px]">
            <div>
              <Image
                src={Data?.LogoWebsite}
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <div className="flex h-full gap-5">
              {HeaderItems.map((item, index) => {
                const DropdownItem = Type?.filter(
                  (items: any) => items.title === item.label
                );

                return (
                  <div key={index} className="relative group/main">
                    <Link
                      href={`/${item.value}`}
                      className="flex flex-col justify-between h-full group cursor-pointer"
                    >
                      <div className="w-0 group-hover:w-full h-1 bg-mainColor  duration-300"></div>
                      <div className="font-normal uppercase text-gray-500 hover:text-black duration-300  text-[13px] flex items-center gap-1">
                        <p> {item.label}</p>
                        {item.children && (
                          <FaCaretDown className="text-[20px]  " />
                        )}
                      </div>
                      <div></div>
                    </Link>
                    {DropdownItem?.length > 0 && (
                      <HeaderDropDown ServiceItem={DropdownItem} />
                    )}
                  </div>
                );
              })}
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
      </div>
      <div className="d:hidden p:block bg-mainNormalBlue ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-white  text-black shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <Link href={`/`} className="h-[84px] w-[87px]">
              <img
                src={Data?.LogoWebsite}
                alt="Logo"
                className="w-full h-full p-2"
              />
            </Link>
            <div className="flex gap-2">
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
                <IoIosMenu />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
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
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
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
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div className=" ">
              <div onClick={() => HandleNavigate("/")} className="p-5">
                <img src={Data?.LogoWebsite} alt="logo" />
              </div>

              <div>
                <div className="flex flex-col mt-2 ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <div
                      onClick={() => HandleNavigate(`/${item.value}`)}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Drawer>
        </>
        <>
          <Modal
            closeIcon={false}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={false}
          >
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
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
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
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
          </Modal>
        </>
      </div>
    </div>
  );
};

export default Header;
