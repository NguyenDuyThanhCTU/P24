import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeService = () => {
  const HomeServiceItems = [
    {
      label: "Tư Vấn Trồng Implant",
      content: "các trường hợp nên trồng Implant ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/implant.jpg?alt=media&token=034823d1-29c8-4176-a059-1a4399fb6089",
    },
    {
      label: " điều trị nha chu",
      content: "Phẫu thuật loại bỏ vi khuẩn ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/nha-chu.jpg?alt=media&token=e68f3836-c305-4c4b-9d27-03ae0a70e72b",
    },
    {
      label: "Chỉnh nha",
      content: "những điều bạn cần phải lưu ý ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/Chinh-nha-2.jpg?alt=media&token=d9a407fd-834e-471d-839c-90f96390a817",
    },
    {
      label: "tẩy trắng răng",
      content: "Brite Smile được ưa chuộng tại Mỹ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/0038.jpg?alt=media&token=640f2e52-1f2c-48a2-9278-b9456f1746bf",
    },
    {
      label: "Nha Khoa Bà Mẹ Mang Thai",
      content: "Lấy cao răng có lợi ích gì? ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/510.jpg?alt=media&token=17b36080-7ec8-4f74-94f1-6a7b317c7b54",
    },
    {
      label: "Nhổ Răng / Tiểu Phẫu Răng",
      content: "Tại sao cần phải nhổ răng khôn? ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/nho-rang.jpg?alt=media&token=791866d2-e9ae-4314-bc97-8a850ceabadf",
    },
    {
      label: "Nội Nha – Chữa Tủy",
      content: " là quá trình điều trị lấy sạch tủy bị ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/noi-nha.jpg?alt=media&token=223dc0ca-3c98-47aa-bb48-8c1ad14c118e",
    },
    {
      label: "Phục Hình Răng",
      content: "Hàm răng giả tháo lắp cũng là một ",
      value: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/Phuc-Hinh.jpg?alt=media&token=f1250c30-b734-4830-8a86-5ad4a2a64272",
    },
  ];
  return (
    <>
      <div>
        <div className="bg-center bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2FUntitled.png?alt=media&token=bdd28cc7-79bf-453a-b24e-9d0ec902a960)] py-10 text-center text-[25px]  font-normal text-blue-800">
          DỊCH VỤ
        </div>
        <div className="grid py-10 gap-6 d:grid-cols-4 p:grid-cols-1 p:w-auto d:w-[1200px] p:mx-2 d:mx-auto">
          {HomeServiceItems.map((item, index) => (
            <Link href={`/${item.value}`} key={index} className="">
              <div className=" col-span-2 rounded-lg flex flex-col items-center py-3 ">
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  alt="service"
                  className="w-[200px] h-[200px] object-contain hover:scale-110 duration-300 rounded-full"
                />
              </div>
              <div className="col-span-3 text-center mt-2 mr-2">
                <h2 className="text-orange-700 font-semibold">{item.label}</h2>
                <p className="font-light">{item.content} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeService;
