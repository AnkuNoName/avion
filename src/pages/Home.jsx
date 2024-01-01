import React, { useEffect, useState } from 'react';
import SiteInfoTop from '../components/HomePage/SiteInfoTop/SiteInfoTop';
import About from '../components/HomePage/About/About';
import NewProdBlock from '../components/HomePage/NewProdBlock/NewProdBlock';
import PopularProd from '../components/HomePage/PopularProd/PopularProd';
import SingUp from '../components/HomePage/SingUp/SingUp';
import GetInTouch from '../components/HomePage/GetInTouch/GetInTouch';

const Home = () => {
  return (
    <React.Fragment>
      <SiteInfoTop />
      <About />
      <NewProdBlock />
      <PopularProd />
      <SingUp />
      <GetInTouch />
    </React.Fragment>
  );
};

export default Home;
