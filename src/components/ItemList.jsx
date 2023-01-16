import React from "react";
import Item from "./Item";
import "../styles/ItemList.css";

const itemList =(props)=>{
   
    return(
    
        <div className="contenedor-cards">
          {
               props.datos.length>0
                ? props.datos.map(item=><Item key={item.id} {...item}/> )
                : <p>Cargando productos</p>
              }
                </div>
        );
}
export default itemList;


