import React from "react";

const ItemDetail =(props)=>{
    return(
        <div class="card">
        <img src={props.dato.img} class="card-img-top product-image" alt="asd"/>
        <div class="card-body">
            <h3 class="card-title">{props.dato.name}</h3>
            <p class=" product-description">{props.dato.description}</p>
            <p class=" product-description">{props.dato.price}</p>
            
         
        </div>
        </div>
    );
}

export default ItemDetail;