import { useContext} from 'react';
import { CartContext } from './CartContext';
import { BsFillCartFill } from "react-icons/bs";
const CartWidget = () => {
    const {calcItemsQty} = useContext(CartContext);

    return (
    
       <>
     

                        <button type="button" class="btn btn-primary position-relative">
                        <BsFillCartFill />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {calcItemsQty()}
                                <span class="visually-hidden">Cantidad de productos EN CARRITO </span>
                            </span>
                </button>
       </>


        
    );
}

export default CartWidget;