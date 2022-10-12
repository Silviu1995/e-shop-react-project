import CategoryItem from "../category-item/category-item.component.jsx";
import "./categories-container.style.scss"
const CategoryList = ({category}) => {
    return( 
    <div className="categories-container">
    {
    category.map((category)=>  (
    <CategoryItem key={category.id} category={category} />
     
   
  ))}

    </div> 
    )
}
export default CategoryList;