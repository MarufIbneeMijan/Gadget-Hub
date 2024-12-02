import React from 'react';
import {useLocation } from 'react-router-dom'

const Banner = ({heading,subheading}) => {
    const path = useLocation()
  
  return (
        <div>
          <div className="hero bg-[#9538E2] text-white min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <p className="py-6">
        {subheading}
      </p>
     {
      (path.pathname==="/"? <button className="btn btn-primary">Shop Now</button>:"")
     }
    
    </div>
  </div>
  
</div>
{
  (path.pathname==="/"? <div className='container mx-auto flex items-center justify-center bg-white h-[300px] p-4 ' >
    <div className='absolute border p-10 rounded-2xl -bottom-[400px] lg:-bottom-[350px] '>
    <img className='rounded-2xl h-[300px]' src="https://i.ibb.co.com/gvsYSyX/banner.jpg" alt="bg img"  />
    </div>
  </div>:"" )
}
        </div>

    );
};

export default Banner;