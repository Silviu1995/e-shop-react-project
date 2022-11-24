import Home from "./components/routes/home/home.components";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation-component.jsx";
// import SignIn from "./components/routes/signin/sign-in.component.jsx";
import Authentification from "./components/routes/Authentification/Authentification.component";
import Shop from "./components/routes/shop/shop.component";
import CheckOut from "./components/routes/check-out/check-out.component";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "./utils/firebase/firebase";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user) {
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user));
        
    });
    return unsubscribe;
    },[dispatch]);

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
