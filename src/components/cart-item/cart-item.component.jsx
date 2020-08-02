import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { image, unit_price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={image} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${unit_price}
      </span>
    </div>
  </div>
);

export default CartItem;
