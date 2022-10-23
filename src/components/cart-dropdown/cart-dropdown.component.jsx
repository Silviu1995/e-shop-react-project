import './cart-dropdown.style.scss'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/cart-dropdown.context';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
    const{cartItems} = useContext(DropdownContext)
    // console.log(cartItems)
    const navigate = useNavigate()
    const checkoutHandler = () => {
        navigate('/checkout')
    }
    return(
        <div className='cart-dropdown-container' >
            <div className='cart-items' >
            {
                cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                
            ))}
            </div>
            <Button onClick={checkoutHandler}>check out</Button>
        </div>
    )
}

export default CartDropdown;