import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import "../styles/Cart.css";
import { Link } from 'react-router-dom';
import { updateDoc, serverTimestamp } from "firebase/firestore";
import{db} from "../utils/firebaseConfig"

import { collection, doc, setDoc, increment } from 'firebase/firestore';








const Cart = () => {
  const { cartList, 
    removeList, 
    deleteItem, 
    calcTotalPerItem, 
    calcSubTotal, 
    calcTaxes, 
    calcTotal
    }= useContext(CartContext);
    const createOrder=()=>{
      const order={
        buyer: {
          name:'Leonel Messi',
          email:'messi@hotmail.com',
          phone:'985668885'
        },
        date: serverTimestamp(),
        items:cartList.map(item=>({
          id:item.id,
          tittle:item.name,
          price:item.price,
          qty:item.qty
        })),
           total:calcTotal()
      }
      //console.log(order)
      const createOrderInFireStore=async()=>{
        const newOrderRef=doc(collection(db, "orders"))
        await setDoc(newOrderRef,order);
        return newOrderRef
      }
     createOrderInFireStore()
         .then(result=>{
          alert('your order'+ result.id+'has been created')

          cartList.forEach(async(item)=>{
            const itemRef =doc(db,"products",item.id);
            await updateDoc(itemRef,{
               //instock:instock - item.qty 
               instock:increment(-item.qty)
            });
          })



          //para borrar el carrito luego de la compra 
         removeList()

        
         })
         .catch(err=>console.log(err))


    }
  return (
    <>
      <h1>Carrito de Compras</h1>
      <div>
      <Link to='/'><button>Continua comprando</button></Link>
      {
                    (cartList.length > 0)
                    ? <button type="filled" onClick={removeList}>DELETE ALL PRODUCTS</button>
                    : <p>Tu carrito esta vacio</p>
                }
      </div> 

      <div>
      <div className="contenedor-cards"> 
      {

        
                        cartList.length > 0 &&
                            cartList.map(item => <ol key={item.id}>


                       
                            
                            <div class="card mb-12 cardi">
                                  <div class="row g-0">
                                    <div class="col-md-4">
                                      <img src={item.img} class="img-fluid rounded-start" alt="adsadsa"/>
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.qty} item(s)</p>
                                        <p class="card-text">$ {item.price} each</p>
                                        <p class="card-text"><small class="text-muted">$ {calcTotalPerItem(item.id)}</small></p>
                                        <button type="filled" onClick={() => deleteItem(item.id)}>DELETE</button>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                            
                            </ol>
                            )
       }
       </div>
      </div>

      <div>

      {
                    cartList.length > 0 &&

                        <div class="card text-center">
                        <div class="card-header">ORDER SUMMARY </div>
                        <div class="card-body">
                          <h5 class="card-title">Resumen de Compra</h5>
                          <p class="card-text">Subtotal:{calcSubTotal()} </p>
                          <p class="card-text">Taxes. :{calcTaxes()} </p>
                          <p class="card-text">Descuento Impuesto:{-calcTaxes()}</p>
                          <p class="card-text">Total:{calcTotal()}</p>
                          <button onClick={createOrder} className="btn btn-primary">Pagar Ahora!</button>
                        </div>
                           
                          
                           
                      
                        </div>
                }


      </div>












    </>
  );
}

export default Cart
