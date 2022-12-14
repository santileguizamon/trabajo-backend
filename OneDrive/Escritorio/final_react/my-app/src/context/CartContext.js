import React, { useState } from 'react'
import { getDoc,query,collection } from 'firebase/firestore';

export const CartContext = React.createContext ();

export const CartProvider = ({children}) =>{
  const [productCartList,setProductCartList]= useState([]);
  

  const addProd = (item,quantity)=>{
    const isInCart =(itemId)=>{
      return carrito.some(el=>el.id===id)
    }
    if(isInCart(newProd.id)){
     carrito.map(el=>{
      if(el.id===newProd.id){
        el.quantity += newProd.quantity
      }
      return(el)
     })} 
    else{
      setCart([...cart,newProd])
     }
  }

  const removeItem=(itemId)=>{
    const newArray = productCartList.filter(product=>product.id !== itemId);
    setProductCartList(newArray)
  }

  const emptyCart = []

  const getQuantity = (isInCart)=>{
    const quantity = newArray.push(getQuantity[productCartList[isInCart]])
  }

  return(
    <CartContext.Provider value={{productCartList,addProd,removeItem,isInCart}}>
        {children}
    </CartContext.Provider>
  )
}

