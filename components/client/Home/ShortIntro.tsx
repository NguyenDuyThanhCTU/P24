import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const UTMFleur = localFont({
  src: "../../../assets/fonts/UTMFleur.ttf",
  display: "swap",
});

const UTMAmerican = localFont({
  src: "../../../assets/fonts/UTMAmericanSans.ttf",
  display: "swap",
});

const ShortIntro = () => {
  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/quangcaocokhixaydung.appspot.com/o/UI%2F201313823_1160040927807717_7589381226147591092_n.jpg?alt=media&token=675fe7a8-72a8-4c33-9dcf-35b463488a38)] bg-center bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.70)]">
        <div className="flex gap-2 py-5 p:px-0 d:px-5 d:flex-row p:flex-col">
          <div className=" flex-[45%] h-[500px] items-center justify-center flex">
            <Image
              width={500}
              height={500}
              src="https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/z5063646834458_37b394e2bd8a7483e84a34603a659735.jpg?alt=media&token=362cc39f-7ca4-422b-ac9d-18c89b50d4e7"
              alt="banner"
              className=" object-contain border-4 border-white"
            />
          </div>
          <div className=" flex-[55%] p:px-0 d:px-10 text-white">
            <h3 className={`font-UTMFleur text-[40px] ${UTMFleur.className}`}>
              Giới thiệu
            </h3>
            <h3
              className={`font-UTMAmerican font-bold text-mainorange text-center text-[30px] leading-7 uppercase ${UTMAmerican.className}`}
            >
              Tại sao chọn Nha Khoa Thẩm Mỹ Trần Húy
            </h3>
            <div className="indent-3 mt-5">
              <p>
                Nha Khoa Thẩm Mỹ Trần Húy là địa chỉ tin cậy của hàng ngàn khách
                hàng trong và ngoài nước. Chúng tôi luôn nỗ lực không ngừng để
                mang đến cho khách hàng những dịch vụ tốt nhất, đáp ứng mọi nhu
                cầu của khách hàng, đặc biệt là những khách hàng khó tính
                nhất...
              </p>
            </div>
            <Link href={`/gioi-thieu`}>
              <div className="text-mainColor mt-5 hover:text-red-700 cursor-pointer">
                Đọc thêm _
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
