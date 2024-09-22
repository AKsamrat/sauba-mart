import React from 'react';
import img2 from '../../public/image 46.png';
import img3 from '../../public/image 47.png';
import img4 from '../../public/image 51.png';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
const Team = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 mb-20">
      <div>
        <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[370px] hover:translate-x-2 hover:scale-110 duration-500">
          <Image
            className="overflow-hidden h-[350px]"
            src={img2}
            alt="product"
          ></Image>
        </div>
        <p className="font-medium pt-4 text-3xl"> Tom Cruise</p>
        <p className=" py-3">
          Founder & Chairman
          {/* <span className="text-gray-600 line-through ">$360</span> */}
        </p>
        <div className="flex justify-start items-center gap-2 ">
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div>
        <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[370px] hover:translate-x-2 hover:scale-110 duration-500">
          <Image
            className="overflow-hidden h-[350px]"
            src={img4}
            alt="product"
          ></Image>
        </div>
        <p className="font-medium pt-4 text-3xl"> Emma Watson</p>
        <p className=" py-3">
          Managing Director
          {/* <span className="text-gray-600 line-through ">$360</span> */}
        </p>
        <div className="flex justify-start items-center gap-2 ">
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div>
        <div className="bg-gray-100 rounded-md flex justify-center items-center p-8 relative h-[370px] hover:translate-x-2 hover:scale-110 duration-500">
          <Image
            className="overflow-hidden h-[350px]"
            src={img3}
            alt="product"
          ></Image>
        </div>
        <p className="font-medium pt-4 text-3xl"> Will Smith</p>
        <p className=" py-3">
          Product Disigner
          {/* <span className="text-gray-600 line-through ">$360</span> */}
        </p>
        <div className="flex justify-start items-center gap-2 ">
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Team;
