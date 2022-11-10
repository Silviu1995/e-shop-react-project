import { useContext } from 'react';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { DropdownContext } from '../../contexts/cart-dropdown.context';
import { Footer, Name, Price, ProductCardContainer } from './product-card.style';



const ProductCard = ({product}) => {

    const {name,price,imageUrl} = product
    const {addItemToCart} = useContext(DropdownContext) 
    const addProductToCart = () => {
        addItemToCart(product)
    }
  
    
    return(
        <ProductCardContainer>
            <img alt={`${name}`} src={imageUrl}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to card</Button>
        </ProductCardContainer>




    )
}

export default ProductCard;