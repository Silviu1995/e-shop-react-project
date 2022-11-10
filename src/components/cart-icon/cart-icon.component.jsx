
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { DropdownContext } from '../../contexts/cart-dropdown.context'
import { useContext } from 'react'
import { CartIconContainer, ItemCount } from './cart-icon.style'
const CartIcon = () => {
    const {currentDropdown,setCurrentDropdown, totalQuantity} = useContext(DropdownContext)
    const dropdownHandler = (event) => {
        setCurrentDropdown(!currentDropdown)
    }
    return(
        <CartIconContainer onClick={dropdownHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon