import { useState } from "react";
import addToCart from "url:./public/icon-add-to-cart.svg";

export default function CartBtn({ prd }) {
     const [cart, setCart]=prd

  const [quantity, setQuantity] = useState(0);

  const decreaseQty = () => setQuantity(quantity - 1);
  const increaseQty = () => {
    setQuantity(quantity + 1)
    setCart({})
{console.log(quantity)}    ;};


  return quantity == 0 ? (
    <button className="add-to-cart-btn" onClick={increaseQty}>
      <img src={addToCart} alt="alt-add-to-cart" className="add-to-cart-icon" />
      Add to Cart
    </button>
  ) : (
    <div className="cart-controls">
      <button className="sub-quantity cart-btn" onClick={decreaseQty}>
        -
      </button>
      <p className="cart-quantity">{quantity}</p>
      <button className="add-quantity cart-btn" onClick={increaseQty}>
        +
      </button>
    </div>
  );
}
