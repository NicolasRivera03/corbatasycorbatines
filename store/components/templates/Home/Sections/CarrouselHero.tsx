"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import WrapperSlide from "@/components/molecules/WrapperSlide";

const CarrouselHero = () => {
  const [hero, sethero] = useState([]);

  useEffect(() => {
    const getHeroes = async () => {
      const res = await fetch(`${process.env.API}/Heroes?populate=*`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + process.env.API_TOKEN,
        },
      });

      const data = await res.json();
      sethero(data.data);
    };

    getHeroes();
  }, []);

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {hero?.map((item, i) => (
          <SwiperSlide key={i}>
            <WrapperSlide
              title={item.attributes.title}
              subtitle={item.attributes.subtitle}
              imgCard={
                process.env.API_UPLOAD +
                item?.attributes?.image?.data[0]?.attributes?.url
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarrouselHero;
