import React from "react";
import Item from "./Item";
import "../styles/ItemList.css";

const itemList =(props)=>{
   
    return(
    
        <div className="contenedor-cards">
          {
                props.datos.map(item=><Item key={item.id} {...item}/> )
        
              }
                </div>
        );
}
export default itemList;


