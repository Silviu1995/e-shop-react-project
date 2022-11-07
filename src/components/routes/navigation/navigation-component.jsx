import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo} from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.contexts";
import {signOutUser} from "../../../utils/firebase/firebase.js"
import {NavigationContainer} from './navigation.style.jsx'
import CartIcon from "../../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {DropdownContext} from '../../../contexts/cart-dropdown.context'
const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {currentDropdown} = useContext(DropdownContext)
    
    return(
      <Fragment>
        <NavigationContainer>
          {/* <Link className="logo-container" to='/'>
          <CrownLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>
                  {''} SIGN OUT
                  {''}
                  </span>)
                : (<Link className="nav-link" to='/auth'>
                SIGN IN
            </Link>
            
              )
            }
           <CartIcon />
          </div>

          { currentDropdown && <CartDropdown/>
         
          } */}
          
        </NavigationContainer>
        <Outlet />
      </Fragment> 
    )
  }

  export default Navigation;