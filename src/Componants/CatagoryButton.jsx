import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryButton = ({catagory}) => {
  
    return (
        <div className='m-5 border rounded-lg'>
            <button className='btn btn-ghost'><Link to={`/category/${catagory}`}>{catagory}</Link></button>
        </div>
    );
};

export default CatagoryButton;