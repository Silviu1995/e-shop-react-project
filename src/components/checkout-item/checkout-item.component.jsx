import './checkout-item.style.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemToCart,clearItemFromCart } from '../../store/cart/cart.action.js';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton,Value } from './checkout-item.style.jsx';
import { selectCartItems } from '../../store/cart/cart.selector.js';
const CheckoutItem = ({cartItem}) => {
    // const {removeItemToCart, addItemToCart, clearItemFromCart} = useContext(DropdownContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name, imageUrl, price, quantity} = cartItem;
    const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem))
    const deleteItemHandler = () => dispatch(removeItemToCart(cartItems,cartItem))
    const clearFromCart = () => dispatch(clearItemFromCart(cartItems,cartItem))
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity className='quantity'>
                <Arrow onClick={deleteItemHandler}>&#10094;</Arrow>
                    <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
                </Quantity>
            <BaseSpan>{price} $</BaseSpan>
            <RemoveButton onClick={()=>clearFromCart()} >&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;