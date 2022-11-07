import DirectoryItem from "../directory-item/directory-item.component";
import "./categories-container.style.scss"
const CategoryList = ({category}) => {
    return( 
    <div className="categories-container">
    {
    category.map((category)=>  (
    <DirectoryItem key={category.id} category={category} />
     
   
  ))}

    </div> 
    )
}
export default CategoryList;