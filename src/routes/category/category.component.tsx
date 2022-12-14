import { useParams } from 'react-router-dom'
import { useState,useEffect, Fragment } from 'react'
import './category.style'
import ProductCard from '../../components/product-card/product-card.component'
import { CatContainer, CatTitle } from './category.style'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector'
import Spinner from '../../components/spinner/spinner.component'

type CategoryRoutesParams = {
    category: string
}
const Category = () =>{
   const {category} = useParams<keyof CategoryRoutesParams>() as CategoryRoutesParams
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