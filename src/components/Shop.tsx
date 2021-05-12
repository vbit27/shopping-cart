import React from 'react';
import Cards from './Cards';

const Shop = () => {
  return <Cards items={items} />;
};

const items = [
  { name: 'Item 1', image: '/images/item1.jpg', id: 1, price: 50, quantity: 1 },
  { name: 'Item 2', image: '/images/item2.jpg', id: 2, price: 60, quantity: 1 },
  { name: 'Item 3', image: '/images/item3.jpg', id: 3, price: 70, quantity: 1 },
  { name: 'Item 4', image: '/images/item4.jpg', id: 4, price: 50, quantity: 1 },
  { name: 'Item 5', image: '/images/item5.jpg', id: 5, price: 50, quantity: 1 },
  { name: 'Item 6', image: '/images/item6.jpg', id: 6, price: 90, quantity: 1 },
];

interface Items {
  name: string;
  image: string;
  id: number;
  price: number;
  quantity: number;
}

export default Shop;
