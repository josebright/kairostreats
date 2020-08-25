import React, { useState, Fragment, useContext } from "react";

import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import Cartform from "./Cartform/Cartform";
import CartContext from "../../../contexts/cart/cartContext";

import "./Cart.css";
import { formatCurrency } from "../../../helpers";

export default function Cart() {
  const cartContext = useContext(CartContext);

  const { cart, totalPrice, removeProduct, increase, decrease } = cartContext;
  const [showButton, setShowButton] = useState(false);
  const onClick = ()=> setShowButton(true);
  // const [cart, setCart] = useState([1, 2, 2]);
  return (
    <div>
      <div className='overlay-header'>
        <h3>Your Orders</h3>
        <span>
          <img src={require("./images/overlayicon.png")} alt='overlay' />
        </span>

        <div className='model-content'>
          {!cart.length > 0 ? (
            <Fragment>
              <h3>Your Basket is empty</h3>
              <Link to='/'>
                <button className='shop'>Shop Now</button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              {cart.map((item) => (
                <CartItem
                  product={item}
                  remove={() => removeProduct(item)}
                  increase={() => increase(item)}
                  decrease={() => decrease(item)}
                />
              ))}
              <h2>Total</h2>
              <p>{formatCurrency(totalPrice)}</p>
              <button className='checkout'
              onClick={onClick}
              >Check Out</button>
              {/* <Cartform /> */}
              <div>{ showButton ? <Cartform/> : null }</div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
