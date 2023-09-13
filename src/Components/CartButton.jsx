import React, { useContext } from "react";
import { CartContext } from "../App";

export default function CartButton({ product }) {
  const { cartProduct, setCartProduct } = useContext(CartContext);

  const handlerCart = () => {
    const matchedProducts = cartProduct.filter((item) => item.id == product.id);
   
    if (matchedProducts.length === 0) {
      var combinedProducts = cartProduct.concat(product);
      setCartProduct(combinedProducts);
    } else {
      alert('Product already in cart!')
    }

  };

  return (
    <button
      className="btn btn-outline-dark flex-shrink-0"
      type="button"
      onClick={handlerCart}
    >
      <i className="bi-cart-fill me-1"></i>
      Add to cart
    </button>
  );
}
