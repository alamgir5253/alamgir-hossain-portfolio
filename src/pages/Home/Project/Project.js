import React from 'react';
import { useNavigate } from 'react-router';
import './Project.css'


const Project = ({project}) => {
  const {_id, s_short1,name,description} =project
  const Navigate = useNavigate()
  const handleDetailer= id =>{
    Navigate(`/projectss/${id}`)
  }

  return (

    <div className="bg-black project-section text-white mx-auto p-4">
      <div className='h-60'>
        <img src={s_short1} className='h-full mx-auto w-full rounded-lg' alt="" />
      </div>
          <div className=''>
            <h4 className='primaryColor project-title pb-4 pt-2 text-2xl'>{name}</h4>
            <p className='primaryColor'>{description}</p>
            <button onClick={()=>handleDetailer(_id)} className='project-btn'>see details</button>
          </div>
        </div>
  );
};

export default Project;