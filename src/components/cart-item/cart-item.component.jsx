import './cart-item.style.jsx'
import { CartItemContainer, ItemDetails, Spans } from './cart-item.style.jsx';

const CartItem = ({cartItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
 
    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Spans>{name}</Spans>
                <Spans>{quantity} x ${price}</Spans>
            </ItemDetails>
            
        </CartItemContainer>
    )
}

export default CartItem;