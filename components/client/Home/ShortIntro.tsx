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
              width={400}
              height={400}
              src="https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/z5110493318795_48292956c19fcec06c9120fc53af56c4.jpg?alt=media&token=6293da59-f4a8-4bb3-8dda-08adc00eb751"
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
                Nha khoa thẩm mỹ Trần Húy thành lập từ năm 2005 đến nay do bác
                sĩ Phạm Trần Húy phụ trách chuyên môn. Bs Phạm Trần Húy hiện tại
                đang công tác tại bệnh viên đa khoa Hậu Nghĩa, Đức Hòa, Long An
              </p>
            </div>
            <Link href={`/gioi-thieu`}>
              <div className="text-white font-bold mt-5 hover:text-red-700 cursor-pointer">
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
