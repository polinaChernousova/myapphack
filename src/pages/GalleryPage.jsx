import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Gallery.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Container } from "@mui/material";

export default function App() {
  return (
    <>
      {/* <Container> */}
      <div>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <video autoPlay loop muted src="/images/video.mp4"></video>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "lightsteelblue" }}>
            <img
              src="https://osakamania.jp/assets_mt/mania/neon/thumbnail.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "lightgreen" }}>
            <img
              // width="50px"
              src="https://osakamania.jp/assets_mt/mania/butaman/715997cc86317da87fa54778e8dd4c79d588c854.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "lightcyan" }}>
            <img
              src="https://osakamania.jp/assets_mt/mania/bookstore/%20thumbnail.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "lightpink" }}>
            <img
              src="https://osakamania.jp/assets_mt/mania/record/thumbnail.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://osakamania.jp/assets_mt/mania/fruitsand/thumbnail.png"
              alt=""
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              width="100%"
              src="https://thumb.tildacdn.com/tild3638-6331-4036-a238-323264346331/-/format/webp/__.jpg"
              alt=""
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
      {/* </Container> */}
    </>
  );
}
