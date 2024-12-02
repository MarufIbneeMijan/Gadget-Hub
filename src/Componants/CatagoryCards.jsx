import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const CatagoryCards = () => {
    const categories = useParams()
  
  const data = useLoaderData()
  const [filteredCatagory,setFilteredCatagory]=useState([])

    
 
  useEffect(()=>{
    if(categories.maruf){
        const filteredByCategory= data.filter(catagory =>catagory.category===categories.maruf)
      
        setFilteredCatagory(filteredByCategory)
    }else{
        setFilteredCatagory(data)
    }
   
    
  },[data])
console.log(filteredCatagory)


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
           {filteredCatagory.map(filteredCatagory=>
          <Product filteredCatagory={filteredCatagory} >

         </Product>
          )}
        </div>
    );
};

export default CatagoryCards;