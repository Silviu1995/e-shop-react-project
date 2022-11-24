
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { getCategoriesAndDocument } from '../../../utils/firebase/firebase';
import { setCategories } from '../../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocument('categories')
            dispatch(setCategories(categories))
          
        }
        getCategoriesMap();
    },[dispatch])
   
    return(
       <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
       </Routes>
    )
}

export default Shop;