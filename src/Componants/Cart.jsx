import React, { useEffect, useState } from 'react';
import { deleteproduct, getPreviousData } from '../Utils/addToCart';
import CartProducts from './CartProducts';




 const Cart = () => {
     const [cartData,setCartData]= useState([])
     
     useEffect(()=>{
        const cart = getPreviousData()
      console.log(cart)
        setCartData(cart)
       
        
      
      
 

     },[])
     const handleSort=()=>{
        const sorted= [...cartData].sort((a,b)=>a.price-b.price)
        setCartData(sorted)
     }
     const handleRemove=(id)=>{
        deleteproduct(id)
        const cart = getPreviousData()
       
          setCartData(cart)
         
     }
   
    let sum = 0
    cartData.map(price=>sum+=price.price)
   

    return (
      <div className='container mx-auto'>
       <div className='flex justify-between'>
        <div>
            <h1 className='font-bold text-2xl'>Cart</h1>
        </div>
        <div className='flex gap-3 align-middle items-center'>
        <span className='text-2xl'>Total={sum}</span>
        <button className="btn text-xl" onClick={handleSort} >Sort By Price </button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-xl" onClick={()=>document.getElementById('my_modal_2').showModal()}>Confirm Purches</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing.
   </p>
    <p>Total {sum}</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        
        </div>
       </div>
      
       
        
      
           
          
        
        {
            cartData.map((product,idx)=> <CartProducts key={product.idx}  product={product} handleRemove={handleRemove}  ></CartProducts> )
        }
       
           
      
      </div>
     );
 };

 export default Cart;