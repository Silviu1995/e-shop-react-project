import './check-out.style.jsx'
import { useContext } from 'react'
import { DropdownContext } from '../../../contexts/cart-dropdown.context'
import CheckoutItem from '../../checkout-item/checkout-item.component'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './check-out.style.jsx'
const CheckOut = () => {
    const {cartItems, cartTotal} = useContext(DropdownContext)
 
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            
                {
                     cartItems.map((cartItem)=> {
                        return(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                        })} 
                        <Total>Total: {cartTotal} $</Total>
        </CheckoutContainer>
    )
}

export default CheckOut