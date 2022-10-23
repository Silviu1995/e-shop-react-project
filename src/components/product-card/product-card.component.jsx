import { useContext } from 'react';
import Button from '../button/button.component';
import { DropdownContext } from '../../contexts/cart-dropdown.context';
import './product-card.style.scss'


const ProductCard = ({product}) => {

    const {name,price,imageUrl} = product
    const {addItemToCart} = useContext(DropdownContext) 
    const addProductToCart = () => {
        addItemToCart(product)
    }
  
    
    return(
        <div className='product-card-container'>
            <img alt={`${name}`} src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart} >Add to card</Button>
        </div>




    )
}

export default ProductCard;