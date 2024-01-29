"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import AddressDropdown from "@components/items/AddressDropdown";
import { BsPhone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import Input from "./Input";
import Image from "next/image";

const Contact = ({ ContactData }: any) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cities, setCities] = React.useState<any>("");
  const [districts, setDistricts] = React.useState("");
  const [wards, setWards] = React.useState("");
  const [content, setContent] = React.useState("");
  const { setIsLoading } = useStateProvider();

  const HandleDiscard = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCities("");
    setDistricts("");
    setWards("");
    setContent("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !phone) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
      setIsLoading(false);
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: name },
        { title: "SĐT:", value: phone },
        { title: "Email:", value: email },
        { title: "Khu vực:", value: `${cities} - ${districts} - ${wards}` },
        { title: "Nội dung lời nhắn:", value: content },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        `https://formsubmit.co/ajax/thanhb1906564@student.ctu.edu.vn`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        setIsLoading(false);
        HandleDiscard();
      } else {
        setIsLoading(false);
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="grid p:grid-cols-1 d:grid-cols-3 gap-10 py-5 font-LexendDeca">
        <div className="flex flex-col">
          <h2 className="py-5 text-[20px]  font-semibold">
            Chúng tôi luôn lắng nghe bạn!
          </h2>
          <div className="flex flex-col gap-2">
            <Input text="Họ tên*" Value={name} setValue={setName} />
            <Input text="Số điện thoại*" Value={phone} setValue={setPhone} />
            <Input text="Email" Value={email} setValue={setEmail} />
            {/* <div className="flex flex-col gap-2">
              <label className="font-semibold ">Khu vực</label>
              <AddressDropdown
                setSelectedCity={setCities}
                setSelectedDistrict={setDistricts}
                setSelectedWardName={setWards}
              />
            </div> */}

            <div className="flex flex-col gap-2">
              <label className="font-semibold ">Nội dung lời nhắn</label>
              <textarea
                className="p-2 border border-mainorange outline-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-3">
              <div
                className="bg-mainColor hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
                onClick={(e) => HandleSubmit(e)}
              >
                Gửi yêu cầu{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" font-LexendDeca font-extralight flex w-full  justify-start col-span-2 items-start gap-3 flex-col">
          <h3 className="text-[48px] font-light ">
            <strong className="font-bold">Liên hệ</strong> với chúng tôi
          </h3>

          <div className=" py-3 flex flex-col gap-3">
            <p className="font-[18px]  ">
              Hãy để lại thông tin đầy đủ theo mẫu bên cạnh, Tôi sẽ liên hệ hỗ
              trợ bạn trong thời gian sớm nhất.
            </p>
            <p className="text-redPrimmary ">* là các thông tin bắt buộc</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/z5110493294648_e0aa629503c4982b544fd057fa873cef.jpg?alt=media&token=036a0b3c-9d84-4fd5-8123-fa0611290456"
              width={400}
              height={400}
              alt="banner"
            />
            <Image
              src="            https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/z5110493308907_e7997b7c68768e1aa171567d306972d0.jpg?alt=media&token=440535ee-be3b-4764-919e-c4b2a93b8f6e
                 "
              width={400}
              height={400}
              alt="banner"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="w-[1600px] mx-auto grid grid-cols-2 gap-5 font-LexendDeca font-extralight">
          <div className="h-screen w-full border-r">
            <iframe src={ContactData?.GoogleMap} className="h-full w-[80%]">
              {" "}
            </iframe>
          </div>
          <div className="">
            <div className="flex flex-col gap-5">
              <h1 className="text-[26px] font-bold">Liên hệ</h1>
              <div className="w-10 h-1 bg-black"></div>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              <div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="" />

                  <h2>Địa chỉ chúng tôi:</h2>
                </div>
                <p className="font-semibold">{ContactData?.CompanyAddress}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <SiGmail className="" />

                  <h2>Email chúng tôi:</h2>
                </div>

                <p className="font-semibold">{ContactData?.Email}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <BsPhone className="" />

                  <h2>Điện thoại:</h2>
                </div>
                <p className="font-semibold">{ContactData?.Hotline}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <AiOutlineClockCircle className="" />

                  <h2>Thời gian làm việc:</h2>
                </div>
                <div className="flex mt-5">
                  <div className="border-2 border-mainColor">
                    <div className="px-5 py-2">
                      <div>
                        <strong>- Giờ làm việc từ thứ 2 đến thứ bảy:</strong>
                        <div className="font-normal text-blue-500">
                          <p>+ Sáng: 7 giờ - 11 giờ 30 phút</p>
                          <p>+ Chiều: 14 giờ - 19 giờ 30 phút</p>
                        </div>
                      </div>
                      <div>
                        <strong className="text-red-500">
                          - Giờ làm việc Chủ nhật và ngày lễ:
                        </strong>
                        <div className="font-normal text-blue-500">
                          <p>+ Sáng: 7 giờ - 11 giờ 30 phút</p>
                          <p>+ Chiều: 14 giờ - 18 giờ 00 phút</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
