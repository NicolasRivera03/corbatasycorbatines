import Image from "next/image";
import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  imgCard?: string;
};

const WrapperSlide = ({ title = "", subtitle = "", imgCard = "" }: Props) => {
  return (
    <div
      className={`w-full aspect-video  h-96 bg-cover bg-center flex flex-col place-content-center max-w-7xl m-auto p-5`}
      style={{ backgroundImage: `url(${imgCard})` }}
    >
      <h1 className="z-10 text-6xl font-bold">{title}</h1>
      <p className="z-10">{subtitle}</p>
    </div>
  );
};

export default WrapperSlide;
