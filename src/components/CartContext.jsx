
import React from 'react'
import { createContext } from "react";
import { useState } from 'react';
export const  CartContext = createContext();


const CartContextProvider = ({children}) => {

    const [cartList,setCartList]=useState([])

    const  addtoCart=(dato,qty)=>{
      const found = cartList.find(product=>product.id===dato.id);
      if (found === undefined) {
        setCartList([
            ...cartList,
            {
            id: dato.id,
            name: dato.name,
            img:dato.img,
            price:dato.price,
            qty: qty

           }
          ]);
        } else {
       found.qty += qty;
          setCartList([
              ...cartList
          ]);
      }
  }

  const removeList = () => {
    setCartList([]);
}


    const deleteItem = (id) => {
      const result = cartList.filter(item => item.id !== id);
      setCartList(result);
  }

  const calcTotalPerItem = (id) => {
    let index = cartList.map(item => item.id).indexOf(id);
    return cartList[index].price * cartList[index].qty;
}

const calcSubTotal = () => {
  let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
  return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const calcTaxes = () => {
  return calcSubTotal() * 0.18;
}

const calcTotal = () => {
  return calcSubTotal();
}

const calcItemsQty = () => {
  let qtys = cartList.map(item => item.qty);
  return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
}








return (
  <CartContext.Provider value={{
      cartList, 
      addtoCart, 
      removeList, 
      deleteItem, 
      calcTotalPerItem, 
      calcSubTotal, 
      calcTaxes, 
      calcTotal,
      calcItemsQty
  }}>
      { children }
  </CartContext.Provider>
);
}

export default CartContextProvider;