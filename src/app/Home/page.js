import Banner from '@/Components/Banner';
import BestSelling from '@/Components/BestSelling';
import NewArival from '@/Components/NewArival';
import OurProduct from '@/Components/OurProduct';
import ProductMarketing from '@/Components/ProductMarketing';
import SubCategory from '@/Components/SubCategory';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <SubCategory></SubCategory>
      <BestSelling></BestSelling>
      <ProductMarketing></ProductMarketing>
      <OurProduct></OurProduct>
      <NewArival></NewArival>
    </div>
  );
};

export default page;
