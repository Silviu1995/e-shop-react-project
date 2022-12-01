import { useParams } from 'react-router-dom'
import { useState,useEffect, Fragment } from 'react'
import './category.style.jsx'
import ProductCard from '../../product-card/product-card.component'
import { CatContainer, CatTitle } from './category.style.jsx'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../../store/categories/category.selector'
import Spinner from '../../../components/spinner/spinner.component'
const Category = () =>{
   const {category} = useParams()
   const categoriesMap = useSelector(selectCategoriesMap)
   const [products,setProducts] = useState(categoriesMap[category])
   const isLoading = useSelector(selectCategoriesIsLoading)
   useEffect(()=>{
    setProducts(categoriesMap[category])
   },[category,categoriesMap])

   return(
    <Fragment>
        <CatTitle>{category.toUpperCase()}</CatTitle>
        {
            isLoading ?(
                <Spinner/>
            ): (
<CatContainer>
        
        {products &&
            products.map((product) => <ProductCard key={product.id} product={product}/>)
        }
    </CatContainer>
            )
        }
         
    </Fragment>
   
   )
}

export default Category