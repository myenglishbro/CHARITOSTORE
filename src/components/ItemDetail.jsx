import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';



const ItemDetail =({dato})=>{
    const [itemCount,setItemCount]=useState(0);
    const {addtoCart} = useContext(CartContext);

     const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        addtoCart(dato,qty);
    }

    return(
        <>
        {
            dato && dato.img
            ? 
            <div class="card">
                    <img src={dato.img} class="card-img-top product-image" alt="asd"/>
                    <div class="card-body">
                        <h3 class="card-title">{dato.name}</h3>
                        <p class=" product-description">{dato.description}</p>
                        <p class=" product-description">{dato.price}</p>
                        <p class=" product-description">cantaidad :{dato.instock} </p>
                    </div>
           
            {
                        itemCount === 0
                        ? <ItemCount stock={dato.instock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' ><button  >CheckOut</button></Link>
            }
            </div>
            : <p>Cargando...</p>
        }
        </>








        
           
         
       
    );
}

export default ItemDetail;