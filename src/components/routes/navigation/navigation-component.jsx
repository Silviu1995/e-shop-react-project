import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo} from '../../../assets/crown.svg'


import {NavigationContainer, NavLinks,NavLink,LogoContainer} from './navigation.style.jsx'
import CartIcon from "../../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {selectIsCartOpen} from '../../../store/cart/cart.selector'
import { signOutStart } from "../../../store/user/user.action";

const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const signOutUser = () => dispatch(signOutStart())
    return(
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
          <CrownLogo className="logo"/>
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>
                  {''} SIGN OUT
                  {''}
                  </NavLink>)
                : (<NavLink to='/auth'>
                SIGN IN
            </NavLink>
            
              )
            }
           <CartIcon />
          </NavLinks>

          { isCartOpen && <CartDropdown/>
         
          }
          
        </NavigationContainer>
        <Outlet />
      </Fragment> 
    )
  }

  export default Navigation;