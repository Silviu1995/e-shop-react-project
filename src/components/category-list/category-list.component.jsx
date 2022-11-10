import DirectoryItem from "../directory-item/directory-item.component";
import "./categories-container.style.jsx"
import { CategoriesContainer } from "./categories-container.style.jsx";
const CategoryList = ({category}) => {
    return( 
    <CategoriesContainer>
    {
    category.map((category)=>  (
    <DirectoryItem key={category.id} category={category} />
     
   
  ))}

    </CategoriesContainer> 
    )
}
export default CategoryList;