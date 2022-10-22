import './cart-dropdown.style.scss'
import Button from '../button/button.component';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container' >
            <div className='cart-item'>
            </div>
            <Button>check out</Button>
        </div>
    )
}

export default CartDropdown;