import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Componants/ErrorPage.jsx';
import MainLayout from './Componants/MainLayout.jsx';
import Home from './Componants/Home.jsx';
import CatagoryCards from './Componants/CatagoryCards.jsx';
import Details from './Componants/Details.jsx';
 import Cart from './Componants/Cart.jsx';
import Wishlist from './Componants/Wishlist.jsx';
import Statistics from './Componants/Statistics.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        
        children:[
        
            {
              path:"/",
              element:<CatagoryCards></CatagoryCards>,
              loader: ()=> fetch("./data.json")
  
            },
          {
            path:"/category/:maruf",
            element:<CatagoryCards></CatagoryCards>,
            loader: ()=> fetch("./data.json")

          }
        ]
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>,
       
       
      },
      {
        path:"/dashboard",
        element:<Cart></Cart>
      },
      {
        path:"/wishlist",
        element:<Wishlist></Wishlist>
      },
      {
        path:"/view-details/:id",
        element:<Details></Details>,
        loader:()=>fetch("./data.json")
      },
     
     
     
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
