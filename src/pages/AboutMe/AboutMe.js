import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../Images/profile.png'
import './AboutMe.css'
const AboutMe = () => {
  return (
    <section className='grid py-4 gap-4  grid-cols-1 md:grid-cols-2'>
      <div>
        <img src={profile} alt="" />
      </div>
      <div className='p-4 md:pl-10'>
        <h2 className='about-title'>who i am</h2>
        <h4 className='font-bold md:text-xl text-xl my-5 md:my-10'> Hi I'm Alamgir Hossain (front-end web developer), from Dhaka, Bangladesh</h4>
        <p className='about-body'>
          I am very glad that you want to know about me.
          As a front-end web developer, I have built a lot of projects which are attached in my portfolio section. Programming is my passion and I love to code.  I am constantly learning new technologies and staying up-to-date on trends in the industry.
          I have completed my Programming Hero Complete Web Development course By Jhankar Mahbub. (1 Jan 2022- 31
          May 2022)


          <p className='about-hobby'>
            Besides, this is my hobby of traveling to different places. I love to play Badminton as an outdoor game.
          </p>
          <span>thanks.</span>
          <div className="about-btn">
          <Link className='rounded-md'  to='/contact'>Contact Me</Link>
          </div>
        </p>
      </div>

    </section>
  );
};

export default AboutMe;