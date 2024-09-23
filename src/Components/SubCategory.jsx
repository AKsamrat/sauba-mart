import Image from 'next/image';
import React from 'react';
import cImg from '../../public/Rectangle.png';
import cImg2 from '../../public/cell.png';
import cImg3 from '../../public/Category-Camera.png';
import cImg4 from '../../public/Category-Computer.png';
import cImg5 from '../../public/Category-Gamepad.png';
import cImg6 from '../../public/Category-Headphone.png';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { SlScreenSmartphone } from 'react-icons/sl';
const SubCategory = () => {
  const categories = [
    {
      id: 1,
      name: 'Computer',
      slug: 'computer',
      pic: cImg4,
    },
    { id: 2, name: 'Phone', slug: 'phone', pic: cImg2 },
    { id: 3, name: 'camera', slug: 'phone', pic: cImg3 },
    { id: 4, name: 'Game', slug: 'phone', pic: cImg5 },
    { id: 5, name: 'Headphone', slug: 'phone', pic: cImg6 },
    { id: 6, name: 'Phone', slug: 'phone', pic: cImg2 },
  ];
  return (
    <div className="my-20">
      <div className="flex justify-start items-center gap-2 mb-5">
        <Image src={cImg} alt="rectangle"></Image>
        <p className=" font-semibold text-[16px] text-[#DB4444] ">Category</p>
      </div>
      <p className="text-3xl font-bold">Browse By Category</p>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 my-16 mx-auto">
        {categories.map(category => (
          <div
            key={category.id}
            className="py-6 px-10 border-2 border-slate-200 flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white"
          >
            <Image
              className="hover:text-white pb-4"
              src={category.pic}
              alt="category"
            ></Image>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SubCategory;
