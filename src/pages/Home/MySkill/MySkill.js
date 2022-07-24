import React from 'react';
import './MySkill.css'
import html from '../../../Images/html.png'
import css from '../../../Images/css.png'
import bootstrap from '../../../Images/bootstrap-logo.png'
import tailwind from '../../../Images/tailwind.png'
import javascript from '../../../Images/javascript.png'
import react from '../../../Images/react.png'
import node from '../../../Images/node.png'
import friebase from '../../../Images/firebase.png'
import mongo from '../../../Images/mongo.png'
import figma from '../../../Images/figma.png'
const MySkill = () => {

  return (
    <section >
       <div className='text-center mt-10 md:mt-20'>
      <h2 className='text-xl skill-title primaryColor uppercase md:text-4xl'>my skill</h2>
    
      <div className='underline'></div>
      </div>
      <div className='mt-20 mx-4 grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2'>

      
      <div className="skill">
        <img src={html} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>html</h4>
      </div>
      <div className="skill">
        <img src={css} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm  text-xm'>css</h4>
      </div>
      <div className="skill">
        <img src={bootstrap} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>bootstrap</h4>
      </div>
      <div className="skill">
        <img src={tailwind} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>tailwind</h4>
      </div>
      <div className="skill">
        <img src={javascript} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>javascript</h4>
      </div>
      <div className="skill">
        <img src={react} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>react</h4>
      </div>
      <div className="skill">
        <img src={mongo} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>mongodb</h4>
      </div>
      <div className="skill">
        <img src={figma} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>figma</h4>
      </div>
      <div className="skill">
        <img src={friebase} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>firebase</h4>
      </div>
      <div className="skill">
        <img src={node} alt="" />
        <h4 className='uppercase primaryColor lg:text-xl mg:text-sm text-xm'>node js</h4>
      </div>
      </div>
      
    </section>
  );
};

export default MySkill;