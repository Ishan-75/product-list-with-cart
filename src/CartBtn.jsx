import { useState } from "react";
import addToCart from "url:./public/icon-add-to-cart.svg";
import decrement from "url:./public/icon-decrement.png";
import increment from "url:./public/icon-increment.png";

export default function CartBtn({ prd, item }) {
  const [cart, setCart] = prd;
  const [quantity, setQuantity] = useState(0);

  const increaseQty = () => {
    setQuantity(quantity + 1);

    // Add item to cart correctly
    setCart((prevCart) => [...prevCart, item]);
  };

  const decreaseQty = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);

      // Remove one item from cart
      setCart((prevCart) => prevCart.slice(0, -1));
    }
  };

  return quantity === 0 ? (
    <button className="add-to-cart-btn" onClick={increaseQty}>
      <img src={addToCart} alt="add-to-cart" />
      Add to Cart
    </button>
  ) : (
    <div className="cart-controls">
      <button onClick={decreaseQty}>
        <img src={decrement} alt="decrement" />
      </button>

      <p>{quantity}</p>

      <button onClick={increaseQty}>
        <img src={increment} alt="increment" />
      </button>
    </div>
  );
}
