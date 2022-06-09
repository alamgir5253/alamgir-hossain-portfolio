import React from 'react';
import './Banner.css'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
const Banner = () => {
  return (
    <div  className='banner-bg'>
   <div className="banner-body text-center">
   <h1 class="text-2xl md:text-4xl uppercase text-white">i am alamgir hossain</h1>
    <p className='text-white mt-2'>profetional front-end web developer</p>
    <div className='flex justify-center mt-5 md:mt-10  gap-4 my-4 text-base md:text-2xl items-center'>
    
    <a href="https://www.facebook.com/shondhak/" target='_blank'><FaFacebook className='facebook'/></a>
    <a href="https://www.linkedin.com/in/alamgirhossain5253/" target='_blank' className='facebook'><FaLinkedin/></a>
    <a href="https://github.com/alamgir5253" target='_blank' className='facebook'><FaGithub/></a>
    </div>
    <a href="https://drive.google.com/file/d/1jZi-5CO9-TjMmYvh8kUqr_EGlhuWvM4v/view?usp=sharing" target='_blank' className="banner-btn">download resume</a>
    </div>
   </div>
   

  );
};

export default Banner;