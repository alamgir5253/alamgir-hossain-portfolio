import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import MySkill from './MySkill/MySkill';
import Portfolio from './Portfolio/Portfolio';

const Home = () => {
  
  return (
    <>
      <Banner />
      <MySkill/>
      <Portfolio />
      <ContactMe/>
    
    </>
  );
};

export default Home;