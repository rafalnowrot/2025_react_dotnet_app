import React, { useState } from 'react';
import './product-card.css';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top" style={{ backgroundImage: `url(${image})` }}></div>
        <div className={`bottom ${clicked ? 'clicked' : ''}`}>
          <div className="left">
            <div className="details">
              <h1>{name}</h1>
              <p>{price}</p>
            </div>
            <div className="buy" onClick={() => setClicked(true)}>
              <span className="material-icons">add_shopping_cart</span>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <span className="material-icons">done</span>
            </div>
            <div className="details">
              <h1>{name}</h1>
              <p>Added to your cart</p>
            </div>
            <div className="remove" onClick={() => setClicked(false)}>
              <span className="material-icons">clear</span>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <span className="material-icons">info_outline</span>
        </div>
        <div className="contents">
          <table>
            <tbody>
              <tr><th>Width</th><th>Height</th></tr>
              <tr><td>3000mm</td><td>4000mm</td></tr>
              <tr><th>Something</th><th>Something</th></tr>
              <tr><td>200mm</td><td>200mm</td></tr>
              <tr><th>Something</th><th>Something</th></tr>
              <tr><td>200mm</td><td>200mm</td></tr>
              <tr><th>Something</th><th>Something</th></tr>
              <tr><td>200mm</td><td>200mm</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
