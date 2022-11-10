import './checkout-item.style.jsx'
import { DropdownContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton,Value } from './checkout-item.style.jsx';
const CheckoutItem = ({cartItem}) => {
    const {RemoveItemFromCheckout, addItemToCart, DeleteItemFromCart} = useContext(DropdownContext)
    const {name, imageUrl, price, quantity} = cartItem;
    const addItemHandler = () => addItemToCart(cartItem)
    const deleteItemHandler = () => DeleteItemFromCart(cartItem)
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
            <RemoveButton onClick={()=>RemoveItemFromCheckout(cartItem)} >&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;