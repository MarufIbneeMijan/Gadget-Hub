import React from 'react';
import Banner from './Banner';
import CatagoryButton from './CatagoryButton';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const category = ["Mobile","Laptop","Accessory","Smartwatch"]
    const heading = "Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
    const subheading = "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    return (
        <div>
            <Banner heading={heading} subheading={subheading} ></Banner>
         
           <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-3'>
           <div className='md:col-span-1 border text-center py-4 rounded-2xl max-h-max'>
           {
                category.map((category,idx) => <CatagoryButton key={category.idx}  catagory={category} ></CatagoryButton> )
               
            }
           </div>
           <div className='md:col-span-2  m-4'>
           <Outlet></Outlet> 
           </div>
           
            </div> 
      
       
        </div>
    );
};

export default Home;