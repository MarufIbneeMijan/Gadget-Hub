
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        async function loadData (){
            const res =await fetch("../../public/data.json")
            const data = await res.json()
            setProducts(data)
        }
        loadData()
       
    },[])
  
   
    const mobiles = useLoaderData()
    console.log(mobiles)

    return (
        
      
        <div>
            {
              // <Link to={`/${mobiles.category}`} >Mobile</Link>
            }
              
            {
              products.map(product=><Product product={product} ></Product>)
            }
        </div>
    );
};

export default Products;