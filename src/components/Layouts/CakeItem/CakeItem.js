import React, { useContext, useEffect } from "react";
import CakesContext from "../../../contexts/cakes/cakesContext";
import CartContext from "../../../contexts/cart/cartContext";
import "./CakeItem.css";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../helpers";

function CakeItem() {
  const cakesContext = useContext(CakesContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    cakesContext.getAllCakes();
  }, []);

  const { addProduct, cart } = cartContext;
  const { cakes } = cakesContext;

  const isInCart = (product) => {
    return cart.find((item) => item.id === product.id);
  };

  return (
    <div className='c-bg'>
      <div className='c-heading'>
        <h1>Creamy Cake</h1>
        <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
      </div>

      <div className='cake-display'>
        {cakes.map((cake, idx) => (
          <div key={idx}>
            <div className='cake-container'>
              <img
                className='cake-gallery'
                src={cake.picture}
                alt={cake.name}
              />
              <div className='cake-overlay overlay-left'>
                <div className='cake-text'>
                  {!isInCart(cake) ? (
                    <Link to={`/product/${cake.id}`}>order now</Link>
                  ) : (
                    <Link>Added to cart</Link>
                  )}
                </div>
              </div>
            </div>

            <div className='cake-content'>
              <h5>{cake.name}</h5>
              <p>{cake.category}</p>
              <h4>{formatCurrency(cake.size8)}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakeItem;
