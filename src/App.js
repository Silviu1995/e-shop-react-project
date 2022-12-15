import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { checkUserSession } from './store/user/user.action';
import Spinner from './components/spinner/spinner.component';
import { GlobalStyle } from './components/global-styles/global.styles';
const Home = lazy(()=> import('./routes/home/home.components'))
const Authentification = lazy(()=> import('./routes/Authentification/Authentification.component'))
const Shop = lazy(()=> import('./routes/shop/shop.component'))
const CheckOut = lazy(()=> import('./routes/check-out/check-out.component'))
const Navigation = lazy(()=> import('./routes/navigation/navigation-component'))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    
    <Suspense fallback={<Spinner/>}>
      <Routes>
      
        <Route path='/' element={<Navigation />}>
       
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentification />} />
          <Route path='checkout' element={<CheckOut />} />
         
        </Route>
        
      </Routes> 
    </Suspense>
    
  );
};

export default App;
