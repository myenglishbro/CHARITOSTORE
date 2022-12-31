import React from "react";
import "../styles/Item.css";
import {Link} from "react-router-dom"
const Item =({img,name,description,price,id})=>{
    return(
        <div class="card">
        <img src={img} class="card-img-top product-image" alt="asd"/>
        <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <p class=" product-description">{description}</p>
            <p class=" product-description">{price}</p>
            <a href=".." class="btn product-button">Comprar</a>
           <a href=".." class="btn product-button">Detalles</a>
          <Link to={`/producto/${id}`}><button className="btn btn-warning">Detalles</button></Link> 
        </div>
        </div>
        
    );
}
export default Item;