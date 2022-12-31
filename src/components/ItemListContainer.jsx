import React from "react";
import ItemList from "./ItemList";
import { useState , useEffect} from "react";
import {data} from "../utils/data";
import customFetch from "../utils/customFetch";
import {useParams} from "react-router-dom"

const ItemListContainer=()=>{
    
    const [datos,setDatos]=useState([]);
    const {idCategory}=useParams();
      
    useEffect(() => {
       if(idCategory){
        //consultando la base de datos
       customFetch(2000,data.filter(item=> item.categoryId===parseInt(idCategory)))
       .then(response =>setDatos(response))
       .catch(err=>console.log(err))
       }
       else{
       //consultando la base de datos
       customFetch(2000,data)
       .then(response =>setDatos(response))
       .catch(err=>console.log(err))
       }
    }, [idCategory]);

    
    return(
        <ItemList datos={datos} />
    );
}

export default ItemListContainer;