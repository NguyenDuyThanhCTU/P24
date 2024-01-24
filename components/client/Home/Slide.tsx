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
        "https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/How%20to%20Make%20(72%20x%2020%20in)(1).jpg?alt=media&token=39b1d943-6839-4273-a50f-61b9ff99283a",
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
