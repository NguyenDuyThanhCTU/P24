import HomeService from "@components/client/Home/Service";
import HomeSlide from "@components/client/Home/Slide";
import ShortIntro from "@components/client/Home/ShortIntro";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import HomePriceList from "@components/client/Home/PriceList";
import Medicalregister from "@components/client/Home/Medicalregister";
import HomeNews from "@components/client/Home/News";
import { getDataLimit } from "@lib/Get";

export const metadata: Metadata = {
  title: "Trang Chủ - Nha khoa thẩm mỹ Trần Húy",
  description: "Trần Húy - Nha khoa thẩm mỹ uy tín tại Cần Thơ",
};

const HomePage = async () => {
  const Data = await getDataLimit("Posts", undefined, 6);
  return (
    <div className="flex flex-col gap-10">
      <HomeSlide />
      <div className="d:w-[1200px] mx-auto  p:w-auto">
        <ShortIntro />
      </div>
      <HomeService />
      <HomePriceList />
      <Medicalregister />
      <HomeNews Data={Data ? Data : []} />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8414543771264!2d105.76804037580216!3d10.029938972517273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1705029788516!5m2!1svi!2s"
          className="w-full h-[50vh]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
