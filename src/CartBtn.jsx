import addToCart from "url:./public/icon-add-to-cart.svg";
import decrement from "url:./public/icon-decrement.png";
import increment from "url:./public/icon-increment.png";

export default function CartBtn({ prd, item }) {
  const [cart, setCart] = prd;

  const quantity = cart.filter(
    (cartItem) => cartItem.name === item.name,
  ).length;

  const increaseQty = () => {
    setCart((oldCart) => [...oldCart, item]);
  };

  const decreaseQty = () => {
    setCart((oldCart) => {
      const i = oldCart.findIndex((cartItem) => cartItem.name === item.name);
      return oldCart.filter((cart, index) => index !== i);
    });
  };

  return quantity === 0 ? (
    <div className="add-to-cart">
      <button className="add-to-cart-btn" onClick={increaseQty}>
        <img src={addToCart} alt="add-to-cart" />
        Add to Cart
      </button>
    </div>
  ) : (
    <div className="cart-controls">
      <img src={decrement} alt="decrement" onClick={decreaseQty} />

      <p>{quantity}</p>

      <img src={increment} alt="increment" onClick={increaseQty} />
    </div>
  );
}
