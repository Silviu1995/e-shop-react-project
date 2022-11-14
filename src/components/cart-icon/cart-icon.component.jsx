
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { DropdownContext } from '../../contexts/cart-dropdown.context'
import { useContext } from 'react'
import { CartIconContainer, ItemCount } from './cart-icon.style'
const CartIcon = () => {
    const {isCartOpen,setIsCartOpen, cartCount} = useContext(DropdownContext)
    const dropdownHandler = (event) => {
        setIsCartOpen(!isCartOpen)
    }
    return(
        <CartIconContainer onClick={dropdownHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon