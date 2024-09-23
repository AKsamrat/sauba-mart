import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../public/todo.png';
import img2 from '../../public/amazon.png';
import img3 from '../../public/android.png';
import img4 from '../../public/adidas.png';
import img5 from '../../public/apple.png';
import img6 from '../../public/fedex.png';
// import img7 from '../../public/niki.png';
import img8 from '../../public/rolex.png';
import img9 from '../../public/algolia.png';
import img10 from '../../public/google.png';
import cImg from '../../public/Rectangle.png';
const OurPartner = () => {
  return (
    <div>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="flex justify-start items-center gap-2 mb-5">
          <Image src={cImg} alt="rectangle"></Image>
          <p className=" font-semibold text-[16px] text-[#DB4444] ">
            Top Brand
          </p>
        </div>
        <div className="flex justify-between items-center mb-14">
          <p className="text-3xl font-bold">Our Brand Partner</p>
        </div>
        <div className="">
          <Marquee>
            <div className="flex items-center justify-center">
              <Image
                src={img1}
                alt="Slack Logo"
                className="block object-contain h-12"
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={img2}
                alt="Slack Logo"
                className="block object-contain h-12"
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={img3}
                alt="Typeform Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img4}
                alt="Algolia Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img5}
                alt="Postcss Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img6}
                alt="TailwindCSS Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img2}
                alt="Discord Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img8}
                alt="Vimeo Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img9}
                alt="Vimeo Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img10}
                alt="Vimeo Logo"
                className="block object-contain h-12"
              />
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default OurPartner;
