import Home from "./components/routes/home/home.components";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation-component.jsx";

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
      </Route>
     
  </Routes>
  
    
  );
}

export default App;
