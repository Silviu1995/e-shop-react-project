import './check-out.style.scss'
import { useContext } from 'react'
import { DropdownContext } from '../../../contexts/cart-dropdown.context'
import CheckoutItem from '../../checkout-item/checkout-item.component'
const CheckOut = () => {
    const {cartItems, cartTotal} = useContext(DropdownContext)
 
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
                {
                     cartItems.map((cartItem)=> {
                        return(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                        })} 
                        <span className='total'>Total: {cartTotal} $</span>
        </div>
    )
}

export default CheckOut