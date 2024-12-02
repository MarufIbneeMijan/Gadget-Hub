import React from 'react';

const WishlistCard = ({listed,handledelete}) => {
    const {product_image,product_title,price,product_id}=listed
    return (
        <div className="card card-side container mx-auto  shadow-xl">
  <figure className='w-[200px]'>
    <img
      src={product_image}
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>{price}</p>
    <div className="card-actions justify-start">
      <button onClick={()=>{
        handledelete(product_id)
      }} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
    );
};

export default WishlistCard;