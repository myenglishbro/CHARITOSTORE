import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import "../styles/Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, 
    removeList, 
    deleteItem, 
    calcTotalPerItem, 
    calcSubTotal, 
    calcTaxes, 
    calcTotal
    }= useContext(CartContext);
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


                       
                            
                            <div class="card mb-3 cardi">
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
                          <a href=".." class="btn btn-primary">CHECKOUT NOW</a>
                        </div>
                           
                          
                           
                      
                        </div>
                }


      </div>












    </>
  );
}

export default Cart
