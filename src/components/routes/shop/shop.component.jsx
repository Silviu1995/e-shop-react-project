
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';

import { fetchCategoriesStart } from '../../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {// eslint-disable-next-line
    const dispatch = useDispatch()// eslint-disable-next-line
    useEffect(()=>{// eslint-disable-next-line
       dispatch(fetchCategoriesStart())// eslint-disable-next-line
    })// eslint-disable-next-line
   
    return(
       <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
       </Routes>
    )
}

export default Shop;