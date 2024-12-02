import React, { useEffect, useState } from 'react';
import { deleteWishlist, getpreviousdata } from '../Utils/addToWishlist';
import WishlistCard from './WishlistCard';
import { ToastContainer } from 'react-toastify';


const Wishlist = () => {
    const [wishList,setWishlist]=useState([])


    useEffect(()=>{
        const wishlisted = getpreviousdata()
        setWishlist(wishlisted)
       
    },[])
    console.log(wishList)
    const handledelete=(id)=>{
       deleteWishlist(id)
       const wishlisted = getpreviousdata()
        setWishlist(wishlisted)
    }
    return (
        <div>
            {
                wishList.map((listed,idx)=><WishlistCard key={listed.idx} listed={listed} handledelete={handledelete} ></WishlistCard>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Wishlist;