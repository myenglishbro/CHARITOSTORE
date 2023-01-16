import { useContext} from 'react';
import { CartContext } from './CartContext';
import { BsFillCartFill } from "react-icons/bs";
const CartWidget = () => {
    const {calcItemsQty} = useContext(CartContext);

    return (
    
        <p ><BsFillCartFill />{calcItemsQty()}</p>
        
    );
}

export default CartWidget;