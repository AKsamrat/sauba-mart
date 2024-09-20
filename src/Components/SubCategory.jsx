import Image from 'next/image';
import React from 'react';
import cImg from '../../public/Rectangle.png';
const SubCategory = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-start items-center gap-2 mb-5">
        <Image src={cImg} alt="rectangle"></Image>
        <p className=" font-semibold text-[16px] text-[#DB4444] ">Category</p>
      </div>
      <p className="text-3xl font-bold">Browse By Category</p>
      <div></div>
    </div>
  );
};

export default SubCategory;
