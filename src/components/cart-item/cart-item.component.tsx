import { CheckoutItemProps } from '../checkout-item/checkout-item.component';
import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { FC, memo } from 'react';
const CartItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
