import Image from 'next/image';
import React from 'react';
import img from '../../../public/about.png';

import Report from '@/Components/Report';
import Services from '@/Components/Services';
import Team from '@/Components/Team';

const page = () => {
  return (
    <div className="my-10">
      {/* hero section =================================                         */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mb-20">
        <div className="flex-1">
          <h1 className="text-5xl font-semibold mb-6">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <Image
          className="flex-1 lg:w-[700px]"
          src={img}
          alt="about page"
        ></Image>
      </div>
      <Report></Report>
      <Team></Team>
      <hr className="mb-10 " />
      <div className="lg:px-16 mb-24">
        <Services></Services>
      </div>
    </div>
  );
};

export default page;
