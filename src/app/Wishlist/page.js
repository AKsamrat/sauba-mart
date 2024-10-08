'use client';
import React, { useState } from 'react';
import img1 from '../../../public/breeds.jpg';
import img2 from '../../../public/eoss.png';
import img3 from '../../../public/asuss.png';
import img4 from '../../../public/curology.png';
import img5 from '../../../public/car.png';
import img6 from '../../../public/boat.png';
import img7 from '../../../public/usb game pad.png';
import img8 from '../../../public/jacket.png';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Image from 'next/image';
import cImg from '../../../public/Rectangle.png';
import { IoEyeOutline } from 'react-icons/io5';
import { Rating } from '@smastrom/react-rating';
const page = () => {
  const [rating, setRating] = useState(4);
  const products = [
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      pPrice: 380,
      review: 95,
      pic: img2,
      rating: 4,
      discount: 42,
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      pPrice: 780,
      review: 325,
      pic: img3,
      rating: 5,
      discount: 32,
    },
    {
      id: 4,
      name: 'Curology Product Set ',
      price: 500,
      pPrice: 530,
      review: 145,
      pic: img4,
      rating: 4,
      discount: 48,
    },
    {
      id: 5,
      name: 'Kids Electric Car ',
      price: 960,
      pPrice: 980,
      review: 65,
      pic: img5,
      rating: 4,
      discount: 22,
    },
  ];
  const wishlist = [
    {
      id: 6,
      name: 'Jr. Zoom Soccer Cleats',
      price: 1160,
      review: 35,
      pic: img6,
      rating: 3,
      discount: 28,
    },
    {
      id: 1,
      name: 'Breed Dry Dog Food',
      price: 100,
      review: 35,
      pic: img1,
      rating: 5,
      discount: 32,
    },
    {
      id: 7,
      name: 'GP11 Shooter USB Gamepad',
      price: 660,
      review: 55,
      pic: img7,
      rating: 4,
      discount: 52,
    },
    {
      id: 8,
      name: 'Quilted Satin Jacket',
      price: 760,
      review: 55,
      pic: img8,
      rating: 5,
      discount: 12,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-14 mt-16">
        <p className="text-xl font-semibold">Wishlist(4)</p>
        <button className="px-10 py-3  border-2 rounded-md">
          Move All To bag
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product?.id}>
            <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[240px] hover:translate-x-2 hover:scale-105 duration-500">
              <Image
                className="overflow-hidden h-[230px]"
                src={product?.pic}
                alt="product"
              ></Image>
              <div className="absolute top-3 right-3">
                <button className="bg-white size-8 rounded-full flex justify-center items-center">
                  <RiDeleteBin5Line className="text-2xl" />
                </button>
              </div>
              <div className="group bg-transparent absolute  transition-all duration-300 ease-in-out bottom-0 w-full">
                <button className="text-white bg-black text-center  w-full py-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out ">
                  Add to Cart
                </button>
              </div>
              <div className="px-2 py-[2px] bg-[#DB4444] absolute top-3 left-3 rounded-lg text-white text-sm">
                <p>-{product?.discount}%</p>
              </div>
            </div>
            <p className="font-medium pt-4 py-2"> {product?.name}</p>
            <p className="text-[#DB4444]">
              $ {product?.price}{' '}
              <span className="text-gray-600 line-through ">
                $ {product?.pPrice}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-14 mt-16">
        <div className="flex justify-start items-center gap-2 mb-5">
          <Image src={cImg} alt="rectangle"></Image>
          <p className=" font-semibold text-[16px] text-[#DB4444] ">
            Just For You
          </p>
        </div>
        <button className="px-10 py-3  border-2 rounded-md">See All</button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {wishlist.map(product => (
          <div key={product?.id}>
            <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[240px] hover:translate-x-2 hover:scale-105 duration-500">
              <Image
                className="overflow-hidden h-[230px]"
                src={product?.pic}
                alt="product"
              ></Image>
              <div className="absolute top-3 right-3">
                <button className="bg-white size-8 rounded-full flex justify-center items-center mt-2">
                  <IoEyeOutline className="text-2xl" />
                </button>
              </div>
              <div className="group bg-transparent absolute  transition-all duration-300 ease-in-out bottom-0 w-full">
                <button className="text-white bg-black text-center  w-full py-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out ">
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="font-medium pt-4 py-2"> {product?.name}</p>
            <p className="text-[#DB4444]">
              $ {product?.price}{' '}
              {/* <span className="text-gray-600 line-through ">$360</span> */}
            </p>
            <div className="flex justify-start items-center gap-2">
              <Rating
                style={{ maxWidth: 90 }}
                value={product?.rating}
                onChange={setRating}
              />
              <span>{product?.review}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
