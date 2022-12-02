import Home from "./components/routes/home/home.components";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation-component.jsx";
// import SignIn from "./components/routes/signin/sign-in.component.jsx";
import Authentification from "./components/routes/Authentification/Authentification.component";
import Shop from "./components/routes/shop/shop.component";
import CheckOut from "./components/routes/check-out/check-out.component";

import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
  <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentification/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
      </Route>
     
  </Routes>
  
    
  );
}

export default App;
