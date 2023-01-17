import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
//import { data } from "../utils/data";
//import customFetch from "../utils/customFetch.js"
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../utils/firebaseConfig.js';



const ItemDetailContainer =()=>{
    const [dato,setDato]=useState([]);
    const {idProduct}=useParams();
      
    useEffect(() => {
         const fetchOneFromFirestore =async()=>{
                                            //customFetch(2000,data.find(item=>item.id === parseInt(idProduct)))
                                    // .then(response =>setDato(response))
                                    //  .catch(err=>console.log(err))
                                    const docRef = doc(db, "products", idProduct);
                                    const docSnap = await getDoc(docRef);
                                    
                                    if (docSnap.exists()) {
                                        return{
                                            id :idProduct,
                                            ...docSnap.data()  
                                        }
                                    } else {
                                    // doc.data() will be undefined in this case
                                    console.log("No such document!");
                                        }
       
     }
     fetchOneFromFirestore()
       .then(result => setDato(result))
       .catch(err=>console.log(err))
      
       
    }, [idProduct]);

    return(
        <ItemDetail dato={dato}/>
    );
}

export default ItemDetailContainer;