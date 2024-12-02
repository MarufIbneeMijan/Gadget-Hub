import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({filteredCatagory}) => {
    const{product_image,product_title}=filteredCatagory
    
    return (
        <div >
           <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={product_image}
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
   
    <div className="card-actions justify-end">
   <button className="btn btn-neutral"> <Link to={`/view-details/${product_title}`} >See Details</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;