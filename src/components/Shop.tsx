import React from 'react';

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}

const items = [
  { name: 'Item 1', image: '../images/image1', id: 1, price: 50, quantity: 1 },
  { name: 'Item 2', image: '../images/image2', id: 2, price: 60, quantity: 1 },
  { name: 'Item 3', image: '../images/image3', id: 3, price: 70, quantity: 1 },
  { name: 'Item 4', image: '../images/image4', id: 4, price: 50, quantity: 1 },
  { name: 'Item 5', image: '../images/image5', id: 5, price: 50, quantity: 1 },
  { name: 'Item 6', image: '../images/image6', id: 6, price: 90, quantity: 1 },
];

export default Shop;
