import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo} from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.contexts";
import {signOutUser} from "../../../utils/firebase/firebase.js"
import {NavigationContainer, NavLinks,NavLink,LogoContainer} from './navigation.style.jsx'

import CartIcon from "../../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {DropdownContext} from '../../../contexts/cart-dropdown.context'
const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {currentDropdown} = useContext(DropdownContext)
    
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

          { currentDropdown && <CartDropdown/>
         
          }
          
        </NavigationContainer>
        <Outlet />
      </Fragment> 
    )
  }

  export default Navigation;