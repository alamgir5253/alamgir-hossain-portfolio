import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Portfolio.css'
const Portfolio = () => {
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/projects')
    .then(res =>res.json())
    .then(data =>setProjects(data))
  },[])

  return (
    <section className='portfolio-section'>
      <div className='text-center mt-10 md:mt-20'>
      <h2 className='text-2xl uppercase md:text-4xl'>my portfolio</h2>
      <p className='text-2xl'>Some of my most recent projects</p>
      <div className='underline'></div>
      </div>

      <div className="all-portfolio grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          projects.map(project => <Project
            key={project._id}
            project={project}
            
            />)
        }
















{/* 
        <div className="portfolio">
          <div className='portfolio-text'>
            <h4>bike parts co.</h4>
            <button className='portfolio-btn'>see details</button>
          </div>
        </div>
        <div className="portfolio2">
          <div className='portfolio2-text'>
            <h4>Dream Auto Warehouse</h4>
            <button className='portfolio2-btn'>see details</button>
          </div>
        </div>
        <div className="portfolio3">
          <div className='portfolio3-text'>
            <h4>wedding photographer</h4>
            <button className='portfolio3-btn'>see details</button>
          </div>
        </div>
        <div className="portfolio4">
          <div className='portfolio4-text'>
            <h4>Event Planner</h4>
            <button className='portfolio4-btn'>see details</button>
          </div>
        </div>
        <div className="portfolio5">
          <div className='portfolio5-text'>
            <h4>panda project</h4>
            <button className='portfolio5-btn'>see details</button>
          </div>
        </div>
        <div className="portfolio6">
          <div className='portfolio6-text'>
            <h4>MEGA PHONE FAIR</h4>
            <button className='portfolio6-btn'>see details</button>
          </div>
        </div>  */}
        


      </div>
    </section>
  );
};

export default Portfolio;