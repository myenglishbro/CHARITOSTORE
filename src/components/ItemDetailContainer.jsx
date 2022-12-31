import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { data } from "../utils/data";
import customFetch from "../utils/customFetch.js"
import ItemDetail from "./ItemDetail";
const ItemDetailContainer =()=>{
    const [dato,setDato]=useState([]);
    const {idProduct}=useParams();
      
    useEffect(() => {
      
       customFetch(2000,data.find(item=>item.id === parseInt(idProduct)))
       .then(response =>setDato(response))
       .catch(err=>console.log(err))
       
      
       
    }, [idProduct]);

    return(
        <ItemDetail dato={dato}/>
    );
}

export default ItemDetailContainer;