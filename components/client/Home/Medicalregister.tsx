import Image from "next/image";
import React from "react";

interface HomeInputProps {
  placeholder: string;
  type?: string;
}

const HomeInput = ({ placeholder, type }: HomeInputProps) => {
  return (
    <>
      {type === "date" ? (
        <>
          <div>
            <div className="text-[15px] font-light">{placeholder}:</div>
            <div className="border rounded-md border-gray-500 mt-2">
              <input
                type="date"
                className="outline-none px-3 py-1 rounded-md"
              />
            </div>
          </div>
        </>
      ) : type === "textarea" ? (
        <>
          <div>
            <div className="text-[15px] font-light">{placeholder}:</div>
            <div className="border rounded-md border-gray-500 mt-2 w-full">
              <textarea
                placeholder={placeholder}
                className="outline-none px-3 py-1 rounded-md w-full"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <div className="text-[15px] font-light">{placeholder}:</div>
            <div className="border rounded-md border-gray-500 mt-2">
              <input
                type="text"
                placeholder={placeholder}
                className="outline-none px-3 py-1 rounded-md"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Medicalregister = () => {
  return (
    <div>
      <div className="bg-center uppercase bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2FUntitled.png?alt=media&token=bdd28cc7-79bf-453a-b24e-9d0ec902a960)] py-10 text-center text-[25px]  font-normal text-blue-800">
        đăng ký khám & tư vấn
      </div>
      <div className="p:w-auto d:w-[1200px] p:mx-2 d:mx-auto flex justify-between pt-10 items-center d:flex-row p:flex-col">
        <div>
          <form>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <HomeInput placeholder="Họ và tên" />

                <HomeInput placeholder="Số điện thoại" />
                <HomeInput placeholder="Ngày" type="date" />
                <HomeInput placeholder="Thời gian" />
              </div>
              <div className="mt-3">
                <HomeInput placeholder="Ghi chú" type="textarea" />
              </div>
            </div>
            <div></div>
          </form>
          <div className="flex mt-3">
            <div className="bg-mainColor px-5 py-2 hover:bg-pink-700 duration-300 text-white uppercase font-normal cursor-pointer rounded-md">
              Gửi thông tin
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/medzone-appointment-1.png?alt=media&token=6763b05e-2319-46bc-b057-9bf042a7149b"
            alt="Medical Register"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Medicalregister;
