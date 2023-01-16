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
      {
                        cartList.length > 0 &&
                            cartList.map(item => 
                            <ol key={item.id}>
                            <div>
                                <img src={item.img} alt ="sadasd"/>
                                <div>
                                <span>
                                    <b>Product:</b> {item.name}
                                </span>
                                <button type="filled" onClick={() => deleteItem(item.id)}>DELETE</button>
                                </div>
                            </div>
                            <div>
                                <div>
                                <p>{item.qty} item(s)</p>
                                /
                                <p>$ {item.price} each</p>
                                </div>
                                <p>$ {calcTotalPerItem(item.id)} </p>
                            </div>
                            </ol>
                            )
                    }
      </div>

      <div>

      {
                    cartList.length > 0 &&
                        <div>
                            <h1>ORDER SUMMARY</h1>
                            <div>
                                <h3>Subtotal</h3>
                                <p><span number={calcSubTotal()} /></p>
                            </div>
                            <div>
                                <p>Taxes</p>
                                <p><span number={calcTaxes()} /></p>
                            </div>
                            <div>
                                <p>Descuento Impuesto</p>
                                <p><span number={-calcTaxes()} /></p>
                            </div>
                            <div type="total">
                                <h2>Total</h2>
                                <p><span number={calcTotal()} /></p>
                            </div>
                            <button>CHECKOUT NOW</button>
                        </div>
                }


      </div>













       <ul>
        {
          cartList.length===0
          ? <p>Your cart is empty</p>
          : cartList.map(item=> <li key={item.id}>{item.name}-cantidad comprada :{item.qty}<img className='img' src={item.img} alt="producto"/>-<button onClick={()=>deleteItem(item.id)}>Delete producto</button></li>
          )
         
        }
       </ul> 
    </>
  );
}

export default Cart
