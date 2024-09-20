import Banner from '@/Components/Banner';
import BestSelling from '@/Components/BestSelling';
import SubCategory from '@/Components/SubCategory';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <SubCategory></SubCategory>
      <BestSelling></BestSelling>
    </div>
  );
};

export default page;
