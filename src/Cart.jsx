import cartLogo from "url:./public/illustration-empty-cart.svg";
import CartBtn from "./CartBtn";
export default function Cart({ prd }) {
  const [cart] = prd;
  return (
    <>
      <div className="cart">
        <h2 className="your-cart">Your Cart({cart.length})</h2>
        <div className="cart-container">
          <img src={cartLogo} alt="cartLogo" className="cart-logo" />
          <p className="cart-info">Your added item will appear here</p>
        </div>
      </div>
    </>
  );
}
