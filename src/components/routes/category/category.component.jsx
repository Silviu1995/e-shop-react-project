import { useParams } from 'react-router-dom'
import { useContext, useState,useEffect, Fragment } from 'react'
import { CategoriesContext } from '../../../contexts/categories.context'
import './category.style.jsx'
import ProductCard from '../../product-card/product-card.component'
import { CatContainer, CatTitle } from './category.style.jsx'
const Category = () =>{
   const {category} = useParams()
   const {categoriesMap} = useContext(CategoriesContext)
   const [products,setProducts] = useState(categoriesMap[category])
   
   useEffect(()=>{
    setProducts(categoriesMap[category])
   },[category,categoriesMap])

   return(
    <Fragment>
        <CatTitle>{category.toUpperCase()}</CatTitle>
         <CatContainer>
        
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </CatContainer>
    </Fragment>
   
   )
}

export default Category