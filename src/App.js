import Home from "./components/routes/home/home.components";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation-component.jsx";
// import SignIn from "./components/routes/signin/sign-in.component.jsx";
import Authentification from "./components/routes/Authentification/Authentification.component";
const Shop = () => {
  return(
    <div>
      <h1>I am the shop</h1>
    </div>
  )
}
const App = () => {

  return (
  <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentification/>}/>
      </Route>
     
  </Routes>
  
    
  );
}

export default App;
