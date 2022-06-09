import React from 'react';
import './ContactMe.css'

import {BsTelephone } from "react-icons/bs";
import {  GoLocation } from "react-icons/go";
import {AiOutlineMail } from "react-icons/ai";

const ContactMe = () => {
  return (
    <section className='contact-section'>
      <h2 className='text-2xl pt-10 text-center pb-20  text-slate-400 md:text-4xl'>Contact Me</h2>
      <div className="contact-body grid md:grid-cols-2  grid-cols-1">
        <div className="address-part h-full">
          <div className="address flex  justify-start items-center">
            <div><GoLocation className='contact-icon'/></div>
            <div><h4>Address</h4>
            <p>Dhaka Bangladesh</p>
            </div>
            
          </div>
          <div className="address flex justify-start items-center">
            <div><BsTelephone className='contact-icon'/></div>
            <div><h4>Phone</h4>
            <p>(+880) 01871754280</p>
            </div>
            
          </div>
          <div className="address flex justify-start items-center">
            <div><AiOutlineMail className='contact-icon'/></div>
            <div><h4>Email</h4>
            <p>alamgir5253@gmail.com</p></div>
            
          </div>
        </div>
        <div className="form-part mx-auto">
          <div className='form-body rounded-md py-10 px-5 bg-white md:w-96'>
            <h4 className='font-bold text-2xl'>Contact With me</h4>
           <form action="https://formsubmit.co/alamgir5253@gmail.com" method="POST">
             <input type="text" placeholder='full name' name='name' />
             <input type="email" placeholder='email ' name='email' />
             <input type="text" placeholder='address' name='address'/>
             <input type="text" placeholder='phone' name='phone' />
             <textarea type="text" placeholder='massage' name='massage' />
             <button type='submit'> send massage</button>
           </form>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default ContactMe;