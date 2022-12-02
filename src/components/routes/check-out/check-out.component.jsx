import './check-out.style.jsx'

import CheckoutItem from '../../checkout-item/checkout-item.component'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './check-out.style.jsx'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../../store/cart/cart.selector.js'
import PaymentForm from '../../payment-form/payment-form.component.jsx'
const CheckOut = () => {
   
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
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
                        <PaymentForm/>
                        
        </CheckoutContainer>
    )
}

export default CheckOut