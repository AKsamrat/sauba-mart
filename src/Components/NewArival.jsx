import React from 'react';
import cImg from '../../public/Rectangle.png';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
const NewArival = () => {
  return (
    <div className="mb-16">
      <div className="flex justify-start items-center gap-2 mb-5">
        <Image src={cImg} alt="rectangle"></Image>
        <p className=" font-semibold text-[16px] text-[#DB4444] ">This Month</p>
      </div>
      <div className="flex justify-between items-center mb-14">
        <p className="text-3xl font-bold">New Arival</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-8 h-[600px] ">
        {/* first image grid============ */}
        <div
          className="lg:col-span-2 bg-black text-white relative bg-cover lg:row-span-2 row-span-1 col-span-1 row-start-1 hover:translate-x-2 hover:scale-105 duration-500 overflow-clip "
          style={{
            backgroundImage: `url('new-pic.png')`,
            // opacity: 10,
          }}
        >
          <div className="absolute left-10 bottom-10">
            <p className="text-2xl">PlayStation 5</p>
            <p className="text-sm">
              Black and White version of the PS5 <br /> coming out on sale
            </p>
            <div className="flex justify-start items-center gap-2 mt-6 ">
              <button className="border-b-2 text-white   py-1">Shop Now</button>
              <p>
                <GoArrowRight className="text-white text-2xl " />
              </p>
            </div>
          </div>
        </div>
        {/* 2nd grid================================= */}
        <div
          className="lg:col-span-2 bg-black text-white relative bg-cover bg-no-repeat row-start-1 row-end-2 hover:translate-x-2 hover:scale-105 duration-500 overflow-clip"
          style={{
            backgroundImage: `url('wo.png')`,
            // opacity: 10,
          }}
        >
          <div className="absolute left-5 bottom-5">
            <p className="text-2xl">Women’s Collections</p>
            <p className="text-sm">
              Featured woman collections that <br /> give you another vibe.
            </p>
            <div className="flex justify-start items-center gap-2 mt-2 ">
              <button className="border-b-2 text-white   py-1">Shop Now</button>
              <p>
                <GoArrowRight className="text-white text-2xl " />
              </p>
            </div>
          </div>
        </div>
        {/* 3rd grid================================= */}
        <div
          className="col-span-1 bg-black text-white relative bg-cover row-start-2 row-end-3 hover:translate-x-2 hover:scale-105 duration-500 overflow-clip"
          style={{
            backgroundImage: `url('gucci.png')`,
            // opacity: 10,
          }}
        >
          <div className="absolute left-5 bottom-5">
            <p className="text-2xl">Perfume</p>
            <p className="text-sm">GUCCI INTENSE OUD EDP</p>
            <div className="flex justify-start items-center gap-2 mt-2 ">
              <button className="border-b-2 text-white   py-1">Shop Now</button>
              <p>
                <GoArrowRight className="text-white text-2xl " />
              </p>
            </div>
          </div>
        </div>
        {/* 4rd grid================================= */}
        <div
          className="col-span-1 bg-black text-white relative bg-cover row-start-2 row-end-3 hover:translate-x-2 hover:scale-105 duration-500 overflow-clip"
          style={{
            backgroundImage: `url('speaker.png')`,

            // opacity: 10,
          }}
        >
          <div className="absolute left-5 bottom-5">
            <p className="text-2xl">Speakers</p>
            <p className="text-sm">Amazon wireless speakers</p>
            <div className="flex justify-start items-center gap-2 mt-2 ">
              <button className="border-b-2 text-white   py-1">Shop Now</button>
              <p>
                <GoArrowRight className="text-white text-2xl " />
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default NewArival;
