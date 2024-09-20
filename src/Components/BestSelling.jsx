'use client';
import { Rating } from '@smastrom/react-rating';
import { HiOutlineHeart } from 'react-icons/hi';
import { IoEyeOutline } from 'react-icons/io5';
import '@smastrom/react-rating/style.css';
import React, { useState } from 'react';
// import { render } from 'react-dom';
import cImg from '../../public/Rectangle.png';
import img from '../../public/coart.png';
import img1 from '../../public/bag.png';
import img3 from '../../public/gammaxx.png';
import img4 from '../../public/bookself.png';
import Image from 'next/image';

const BestSelling = () => {
  const [rating, setRating] = useState(4);
  return (
    <div className="mb-32">
      <div className="flex justify-start items-center gap-2 mb-5">
        <Image src={cImg} alt="rectangle"></Image>
        <p className=" font-semibold text-[16px] text-[#DB4444] ">This Month</p>
      </div>
      <div className="flex justify-between items-center mb-14">
        <p className="text-3xl font-bold">Best Seeling Product</p>
        <button className="px-10 py-3 bg-[#DB4444] rounded-lg text-white">
          View All
        </button>
      </div>
      {/* cart ===================== */}
      <div className="grid grid-cols-4 gap-7">
        <div>
          <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[240px]">
            <Image src={img} alt="product"></Image>
            <div className="absolute top-3 right-3">
              <button className="bg-white size-8 rounded-full flex justify-center items-center">
                <HiOutlineHeart className="text-2xl" />
              </button>
              <button className="bg-white size-8 rounded-full flex justify-center items-center mt-2">
                <IoEyeOutline className="text-2xl" />
              </button>
            </div>
          </div>
          <p className="font-medium pt-4 py-2">The north Coat</p>
          <p className="text-[#DB4444]">
            $260 <span className="text-gray-600">$360</span>
          </p>
          <div className="flex justify-start items-center gap-2">
            <Rating
              style={{ maxWidth: 90 }}
              value={rating}
              onChange={setRating}
            />
            <span>(65)</span>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[240px]">
            <Image src={img1} alt="product"></Image>
            <div className="absolute top-3 right-3">
              <button className="bg-white size-8 rounded-full flex justify-center items-center">
                <HiOutlineHeart className="text-2xl" />
              </button>
              <button className="bg-white size-8 rounded-full flex justify-center items-center mt-2">
                <IoEyeOutline className="text-2xl" />
              </button>
            </div>
          </div>
          <p className="font-medium pt-4 py-2">Gucci duffle bag</p>
          <p className="text-[#DB4444]">
            $960 <span className="text-gray-600">$1160</span>
          </p>
          <div className="flex justify-start items-center gap-2">
            <Rating
              style={{ maxWidth: 90 }}
              value={rating}
              onChange={setRating}
            />
            <span>(67)</span>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[240px]">
            <Image src={img3} alt="product"></Image>
            <div className="absolute top-3 right-3">
              <button className="bg-white size-8 rounded-full flex justify-center items-center">
                <HiOutlineHeart className="text-2xl" />
              </button>
              <button className="bg-white size-8 rounded-full flex justify-center items-center mt-2">
                <IoEyeOutline className="text-2xl" />
              </button>
            </div>
          </div>
          <p className="font-medium pt-4 py-2">RGB liquid CPU Cooler</p>
          <p className="text-[#DB4444]">
            $160 <span className="text-gray-600">$170</span>
          </p>
          <div className="flex justify-start items-center gap-2">
            <Rating
              style={{ maxWidth: 90 }}
              value={rating}
              onChange={setRating}
            />
            <span>(33)</span>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[240px]">
            <Image src={img4} alt="product"></Image>
            <div className="absolute top-3 right-3">
              <button className="bg-white size-8 rounded-full flex justify-center items-center">
                <HiOutlineHeart className="text-2xl" />
              </button>
              <button className="bg-white size-8 rounded-full flex justify-center items-center mt-2">
                <IoEyeOutline className="text-2xl" />
              </button>
            </div>
          </div>
          <p className="font-medium pt-4 py-2">Small BookSelf</p>
          <p className="text-[#DB4444]">
            $360 <span className="text-gray-600">$390</span>
          </p>
          <div className="flex justify-start items-center gap-2">
            <Rating
              style={{ maxWidth: 90 }}
              value={rating}
              onChange={setRating}
            />
            <span>(45)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
