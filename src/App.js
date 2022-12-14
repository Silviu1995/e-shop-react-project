import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.components';
import Navigation from './routes/navigation/navigation-component';
import Authentification from './routes/Authentification/Authentification.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/check-out/check-out.component';

import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentification />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
