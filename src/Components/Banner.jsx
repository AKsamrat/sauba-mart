'use client';
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import img1 from '../../public/iphone.jpg';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import { ImAppleinc } from 'react-icons/im';
import { GoArrowRight } from 'react-icons/go';

const Banner = () => {
  const categories = [
    { id: 1, name: 'Woman Fashion', slug: 'woman' },
    { id: 2, name: 'Men fashion', slug: 'man' },
    { id: 3, name: 'Electronics', slug: 'electronics' },
    { id: 4, name: 'Home and Lifestyle', slug: 'home' },
    { id: 5, name: 'Home and Medicine', slug: 'medicine' },
    { id: 6, name: 'Sports & Outdoor', slug: 'sports' },
    { id: 7, name: 'Bodys & Toys', slug: 'body' },
    { id: 8, name: 'Groceries & pets', slug: 'grocery' },
    { id: 9, name: 'Health & Beauty', slug: 'health' },
  ];

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <div className="border-r-2 border-gray-200 pt-8 pl-7">
          <ul className="flex flex-col justify-start space-y-4">
            {categories.map(category => (
              <li key={category.id}>
                <a
                  href={`#${category.slug}`}
                  className="text-[16px]  text-gray-700 hover:text-blue-500"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" flex justify-center items-center bg-black px-2 mx-auto ml-11 mt-10 h-96">
              <div className="text-start pl-16 items-start mt-32 w-full h-full ">
                <div className="flex justify-start items-center gap-4 text-white pb-6">
                  <ImAppleinc className="text-4xl" />
                  <p>iPhone 16 series</p>
                </div>
                <h1 className="text-3xl font-semibold text-white lg:text-5xl">
                  Up to 10% <br /> off Vouche
                </h1>
                <div className="flex justify-start items-center gap-2 mt-6 ">
                  <button className="border-b-2 text-white   py-1">
                    Shop Now
                  </button>
                  <p>
                    <GoArrowRight className="text-white text-2xl " />
                  </p>
                </div>
              </div>
              <div className="w-full   ">
                <Image src={img1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center items-center bg-black px-2 mx-auto ml-11 mt-10 h-96">
              <div className="text-start pl-16 items-start mt-32 w-full h-full ">
                <div className="flex justify-start items-center gap-4 text-white pb-6">
                  <ImAppleinc className="text-4xl" />
                  <p>iPhone 16 series</p>
                </div>
                <h1 className="text-3xl font-semibold text-white lg:text-5xl">
                  Up to 10% <br /> off Vouche
                </h1>
                <div className="flex justify-start items-center gap-2 mt-6 ">
                  <button className="border-b-2 text-white   py-1">
                    Shop Now
                  </button>
                  <p>
                    <GoArrowRight className="text-white text-2xl " />
                  </p>
                </div>
              </div>
              <div className="w-full   ">
                <Image src={img1} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
