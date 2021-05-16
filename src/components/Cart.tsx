import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
  const { cart, setCart } = useContext(CartContext)!;

  return (
    <div>
      <h1>hiiii</h1>
    </div>
  );
}

const items = [
  { name: 'Item 1', image: '/images/item1.jpg', id: '101', price: 50 },
  { name: 'Item 2', image: '/images/item2.jpg', id: '102', price: 60 },
  { name: 'Item 3', image: '/images/item3.jpg', id: '103', price: 70 },
  { name: 'Item 4', image: '/images/item4.jpg', id: '104', price: 50 },
  { name: 'Item 5', image: '/images/item5.jpg', id: '105', price: 50 },
  { name: 'Item 6', image: '/images/item6.jpg', id: '106', price: 90 },
];

export default Cart;
