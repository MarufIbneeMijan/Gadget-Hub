import { toast } from 'react-toastify';

const getPreviousData = ()=>{
    const preData = localStorage.getItem("Cart")
    if(preData){
      const all=  JSON.parse(preData)
      return all
    }else{
        return []
    }
}


const addCart=(cartProduct)=>{
  
    const cartProducts = getPreviousData()
  
    const isExist = cartProducts.find(item =>item.product_id === cartProduct.product_id)
    if(isExist)
        return  toast("Already Added!");
        
   
    cartProducts.push(cartProduct)
    localStorage.setItem("Cart",JSON.stringify(cartProducts))
    toast("Added To Your Cart!");

}
const deleteproduct=(id)=>{
    const cartProducts = getPreviousData()
    const remaining= cartProducts.filter(remain=> remain.product_id!=id)
    localStorage.setItem("Cart",JSON.stringify(remaining))

}


export{addCart,getPreviousData,deleteproduct}