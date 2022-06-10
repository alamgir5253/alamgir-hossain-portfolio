import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

const ProjectDetails = () => {
  const {detailsid} = useParams()
  const [details, setDetails] = useState({})
  console.log(details);
  useEffect(()=>{
    const url =(`http://localhost:5000/project/${detailsid}`)
    fetch(url)
    .then(res =>res.json())
    .then(data =>setDetails(data))
  },[])
  // const url = `https://blooming-brook-62791.herokuapp.com/parts/${partid}`
  // fetch(url).then(res => res.json()).then(data => setPart(data))
  return (
    <div>
      <h1>project details {detailsid}</h1>
      <h1>project details </h1>
      
    </div>
  );
};

export default ProjectDetails;