import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { DropdownContext } from '../../contexts/cart-dropdown.context'
import { useContext } from 'react'
const CartIcon = () => {
    const {currentDropdown,setCurrentDropdown} = useContext(DropdownContext)
    const dropdownHandler = (event) => {
        setCurrentDropdown(!currentDropdown)
    }
    return(
        <div className='cart-icon-container' onClick={dropdownHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon