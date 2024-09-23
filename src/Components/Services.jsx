import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { PiHeadsetBold } from 'react-icons/pi';
import { SiAdguard } from 'react-icons/si';
const Services = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 mb-10">
      {/* 1st service=================== */}
      <div className="flex flex-col justify-center items-center">
        <div className="size-20 rounded-full flex justify-center items-center bg-gray-400 p-2 mb-5">
          <div className="size-14 rounded-full flex justify-center items-center bg-black p-2">
            <TbTruckDelivery className="text-5xl text-white" />
          </div>
        </div>
        <p className="text-xl font-bold">FREE AND FAST DELIVERY</p>
        <p className="text-sm">Free delivery for all orders over $140</p>
      </div>
      {/* 2nd services================================ */}
      <div className="flex flex-col justify-center items-center">
        <div className="size-20 rounded-full flex justify-center items-center bg-gray-400 p-2 mb-5">
          <div className="size-14 rounded-full flex justify-center items-center bg-black p-2">
            <PiHeadsetBold className="text-5xl text-white" />
          </div>
        </div>
        <p className="text-xl font-bold">24/7 CUSTOMER SERVICE</p>
        <p className="text-sm">Friendly 24/7 customer support</p>
      </div>
      {/* 3rd service==================== */}
      <div className="flex flex-col justify-center items-center">
        <div className="size-20 rounded-full flex justify-center items-center bg-gray-400 p-2 mb-5">
          <div className="size-14 rounded-full flex justify-center items-center bg-black p-3">
            <SiAdguard className="text-4xl text-white" />
          </div>
        </div>
        <p className="text-xl font-bold">MONEY BACK GUARANTEE</p>
        <p className="text-sm">We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default Services;
