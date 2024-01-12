"use client";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperNavButtons } from "@components/items/client/SwiperNavButton";
import Image from "next/image";

function App() {
  const SlideItems = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/z2403573944441_069dfd555367b2723fea718ccf511975.jpg?alt=media&token=6c669d4e-8c28-4a95-9ffb-7248d8c6aa6b",
      url: "/",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/z2403571338766_6c9b21472dfd3c6f6fdeb8c93cedd81f.jpg?alt=media&token=ee20b098-a71a-4955-aef2-87bb3cda692a",
      url: "/doi-tac",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/z2403570992769_374d2f83163bd683ff08f6be0368372b.jpg?alt=media&token=270e4222-12d3-408c-9dbb-19c521c29c2f",
      url: "/yeu-cau",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/banner2_-nhakhoauytincantho-2020.jpg?alt=media&token=8ea91c24-8fc3-48dc-8f89-e4504505376d",
      url: "/value-xuke",
    },
  ];

  return (
    <div className="App">
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="mySwiper relative"
        >
          {SlideItems.map((item, index) => (
            <div key={index}>
              <SwiperSlide>
                {/* <Link href={item.url}> */}
                <Image
                  src={item.image}
                  alt="banner"
                  width={12000}
                  height={500}
                  className="w-full h-[70vh] object-cover"
                />
                {/* </Link> */}
              </SwiperSlide>
            </div>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </h1>
    </div>
  );
}

export default App;
