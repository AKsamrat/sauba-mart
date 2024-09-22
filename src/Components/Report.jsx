import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { LuCircleDollarSign } from 'react-icons/lu';
import { FaUserCheck } from 'react-icons/fa6';
import { FaSackDollar } from 'react-icons/fa6';
const Report = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
      {/* 1st report ====================== */}
      <div className="flex flex-col justify-center items-center border-gray-200 rounded-md border-2 p-4 hover:bg-[#DB4444] hover:text-white ">
        <div className="size-20 rounded-full flex justify-center items-center bg-gray-400 p-2 mb-5">
          <div className="size-14 rounded-full flex justify-center items-center bg-black p-3">
            <FaUsers className="text-4xl text-white" />
          </div>
        </div>
        <p className="text-3xl font-bold">10.5k</p>
        <p className="text-sm">Salers astive our site</p>
      </div>

      {/* 2nd report ======================================== */}
      <div className="flex flex-col justify-center items-center border-gray-200 rounded-md border-2 p-4 hover:bg-[#DB4444] hover:text-white ">
        <div className="size-20 rounded-full flex justify-center items-center bg-gray-400 p-2 mb-5">
          <div className="size-14 rounded-full flex justify-center items-center bg-black p-3">
            <LuCircleDollarSign className="text-4xl text-white" />
          </div>
        </div>
        <p className="text-3xl font-bold">33k</p>
        <p className="text-sm">Monthly Product Sale</p>
      </div>

      {/* 3rd report =========================== */}
      <div className="flex flex-col justify-center items-center border-gray-200 rounded-md border-2 p-4 hover:bg-[#DB4444] hover:text-white ">
        <div className="size-20 rounded-full flex justify-center items-center bg-gray-400 p-2 mb-5">
          <div className="size-14 rounded-full flex justify-center items-center bg-black p-3">
            <FaUserCheck className="text-4xl text-white" />
          </div>
        </div>
        <p className="text-3xl font-bold">45.5k</p>
        <p className="text-sm">Customer active in our site</p>
      </div>

      {/* 4th report============================================= */}
      <div className="flex flex-col justify-center items-center border-gray-200 rounded-md border-2 p-4 hover:bg-[#DB4444] hover:text-white ">
        <div className="size-20 rounded-full flex justify-center items-center bg-gray-400 p-2 mb-5">
          <div className="size-14 rounded-full flex justify-center items-center bg-black p-3">
            <FaSackDollar className="text-4xl text-white" />
          </div>
        </div>
        <p className="text-3xl font-bold">25k</p>
        <p className="text-sm">Anuwar gross sale in our site</p>
      </div>
    </div>
  );
};

export default Report;
