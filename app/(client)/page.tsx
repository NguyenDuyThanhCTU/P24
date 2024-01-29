import HomeService from "@components/client/Home/Service";
import HomeSlide from "@components/client/Home/Slide";
import ShortIntro from "@components/client/Home/ShortIntro";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import HomePriceList from "@components/client/Home/PriceList";
import Medicalregister from "@components/client/Home/Medicalregister";
import HomeNews from "@components/client/Home/News";
import { find } from "@lib/api";

export const metadata: Metadata = {
  title: "Trang Chủ - Nha khoa thẩm mỹ Trần Húy",
  description: "Trần Húy - Nha khoa thẩm mỹ uy tín tại Long An",
};

const HomePage = async () => {
  const Data = await find("Posts");
  const Slide = await find("Slides");
  return (
    <div className="flex flex-col gap-10">
      <HomeSlide Data={Slide} />
      <div className="d:w-[1200px] mx-auto  p:w-auto">
        <ShortIntro />
      </div>
      <HomeService />
      <HomePriceList />
      <Medicalregister />
      <HomeNews Data={Data ? Data : []} />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489.6655737048858!2d106.367977!3d10.9388352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b288aeaaaaaab%3A0x7cc3481e8328f094!2zTkhBIEtIT0EgVFLhuqZOIEjDmlk!5e0!3m2!1sen!2s!4v1706064707806!5m2!1sen!2s"
          className="w-full h-[50vh]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
