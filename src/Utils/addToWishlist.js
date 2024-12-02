import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const getpreviousdata = ()=>{
    const previousData = localStorage.getItem("WishList")
    if(previousData){
       const returnedData = JSON.parse(previousData)
       return returnedData
    }else{
        return []
    }
}


const addwishList=(wishListedProducts)=>{
    const listedProduct=getpreviousdata()
    const isExisted = listedProduct.find(item=>item.product_id===wishListedProducts.product_id)
    if(isExisted){
        return toast("Already Exist In Your WishList")
    }else{
        listedProduct.push(wishListedProducts)
        localStorage.setItem("WishList",JSON.stringify( listedProduct))
        toast("SuccessFully Added In Your WishList")
       

    }
   
}
const deleteWishlist = (id)=>{
    const listed = getpreviousdata()
    const remaining= listed.filter(selected=> selected.product_id!=id)
    localStorage.setItem("WishList",JSON.stringify( remaining))
}

export{addwishList,getpreviousdata, deleteWishlist}