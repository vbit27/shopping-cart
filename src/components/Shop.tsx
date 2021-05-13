import React, { useState } from 'react';
import Cards from './Cards';

const Shop = () => {
  const [quantity, setQuantity] = useState({
    '101': 1,
    '102': 1,
    '103': 1,
    '104': 1,
    '105': 1,
    '106': 1,
  });

  const incrementQuantity = (index: string) => {
    let currentQuantity = quantity[index as keyof Quantity];

    setQuantity({ ...quantity, [index]: ++currentQuantity });
    console.log(quantity);
  };

  const decrementQuantity = (index: string) => {
    let currentQuantity = quantity[index as keyof Quantity];

    setQuantity({ ...quantity, [index]: --currentQuantity });
    console.log(quantity);
  };

  return (
    <Cards
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      items={items}
      quantity={quantity}
    />
  );
};

const items = [
  { name: 'Item 1', image: '/images/item1.jpg', id: '101', price: 50 },
  { name: 'Item 2', image: '/images/item2.jpg', id: '102', price: 60 },
  { name: 'Item 3', image: '/images/item3.jpg', id: '103', price: 70 },
  { name: 'Item 4', image: '/images/item4.jpg', id: '104', price: 50 },
  { name: 'Item 5', image: '/images/item5.jpg', id: '105', price: 50 },
  { name: 'Item 6', image: '/images/item6.jpg', id: '106', price: 90 },
];

interface Items {
  name: string;
  image: string;
  id: string;
  price: number;
}

interface Quantity {
  '101': number;
  '102': number;
  '103': number;
  '104': number;
  '105': number;
  '106': number;
}

export default Shop;
