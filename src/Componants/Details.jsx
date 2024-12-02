import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addCart } from '../Utils/addToCart';
import { addwishList } from '../Utils/addToWishlist';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner';
const Details = () => {
   
  
   
    const [productDetails,setProductDetails]=useState([])
    const data = useLoaderData()
    const {id} = useParams()
   
   
   
 

   
    useEffect(()=>{
        const details= [...data].find(fella => fella.product_title===id)

    
     setProductDetails(details)
   
     
   },[data,productDetails])
       
  const {product_title,product_image,price,description,rating,category}=productDetails
  

const handleAddToCart = (cartProduct)=>{
  addCart(cartProduct)
 
}

const handleWishList=(WishListProducts)=>{
  addwishList(WishListProducts)
}
const heading = "Product Details"
const subheading = "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    return (
       <div>
        <div className='h-[450px]'>
        <Banner heading={heading} subheading={subheading} ></Banner>
        </div>
       
        <div className="card bg-base-100 w-96 p-6 mb-10 shadow-xl mx-auto">
  <figure>
    <img
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {product_title}
      
    </h2>
    <p>{description}</p>
    <div>
      <h4>Price: {price}</h4>
      <h4>Rating: {rating}</h4>
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
     <ToastContainer></ToastContainer>
    </div>
    <div className='flex justify-between' >  
      <button className='btn btn-neutral' onClick={()=>handleAddToCart(productDetails)} >Add to cart</button>
      <button className='btn btn-neutral' onClick={()=>handleWishList(productDetails)} >Add to WishList</button>
    </div>
  </div>
</div>
       </div>
      

    );
};

export default Details;