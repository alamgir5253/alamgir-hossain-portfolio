import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
const ProjectDetails = () => {
  const { detailsid } = useParams()
  const [details, setDetails] = useState({})
  console.log(details);
  useEffect(() => {
    const url = (`https://mysterious-taiga-28523.herokuapp.com/project/${detailsid}`)
    fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [])

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
        <div className='flex justify-center items-center flex-col gap-4'>
          <div className='max-w-xs p-4 bgsecondery '><img className='w-full' src={details.s_short1} alt="" /></div>
          <div className='max-w-xs p-4 bgsecondery'><img className='w-full' src={details.s_short2} alt="" /></div>
          <div className='max-w-xs p-4 bgsecondery'><img className='w-full' src={details.s_short3} alt="" /></div>
        </div>
        <div className=''>
          <h4 className='font-bold text-xl md:text-3xl mb-4' style={{color: '#014e68'}}>{details.name}</h4>
            <h3 className='text-xl mb-1 font-bold'>Project Feature</h3>
          <div className='pl-4 font-semibold'>
            <div className='flex justify-start mb-2 items-start'>
              <p><AiFillStar className='mt-1 mr-2' style={{color: '#014e68'}} /></p> <p>{details.b_point1}</p>
            </div>
            <div className='flex justify-start mb-2 '>
              <p><AiFillStar className='mt-1 mr-2' style={{color: '#014e68'}} /></p> <p>{details.b_point2}</p>
            </div>
            <div className='flex justify-start mb-2'>
              <p><AiFillStar className='mt-1 mr-2' style={{color: '#014e68'}} /></p> <p>{details.b_point3}</p>
            </div>
          </div>
          <h3 className='text-xl mb-1 font-bold'>Technology Used</h3>
            <p>{details.Technology}</p>
          <h3 className='text-xl mb-1 font-bold'>Short Description</h3>
            <p>{details.description}</p>

          <div className='mt-4'>
          <button className='btn bgsecondery'><a href={details.livesite} target='_blank'>live site</a></button>
          <button  className='btn bgsecondery mx-4'>
          <a href={details.github_client} target='_blank'>github_client</a>
          </button>

{details.github_server && <button  className='btn bgsecondery'><a href={details.github_server} target='_blank'>github_server</a></button>}
          </div>

        </div>
      </div>


    </section>
  );
};

export default ProjectDetails;