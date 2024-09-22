'use client';
import React from 'react';
import img1 from '../../public/BOOMBOX.png';
import Image from 'next/image';
import CountdownTimer from './COuntdownTimer';
import Timer from './Timer';

const ProductMarketing = () => {
  return (
    <div>
      <div className=" flex justify-center items-center bg-black px-2 pb-4 mx-auto mt-10 my-16 h-[420px]">
        <div className="text-start pl-16 items-start mt-32 w-full h-full ">
          <div className="flex justify-start items-center gap-4 text-white pb-6">
            {/* <ImAppleinc className="text-4xl" /> */}
            <p className="text-[#DB4444]">Category</p>
          </div>
          <h1 className="text-3xl font-semibold text-white lg:text-5xl">
            Enhance Your <br /> Music Experience
          </h1>
          <Timer time={'December, 31, 2024'} />
          <br />
          <button className="px-5 py-3 bg-[#DB4444] rounded-sm text-white mt-1">
            Buy Now
          </button>
        </div>
        <div className="w-full flex justify-center items-center  relative ">
          <div className="size-[450px] bg-gradient-to-r from-[#D9D9D9] from-30% via-[#D9D9D9] via-40%  to-[#D9D9D9] rounded-full opacity-30 blur-3xl "></div>
          <div className="absolute">
            <Image src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMarketing;
