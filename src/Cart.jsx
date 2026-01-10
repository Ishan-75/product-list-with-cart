import cartLogo from "url:./public/illustration-empty-cart.svg";
export default function Cart() {
  return (
    <>
      <div className="cart">
          <h2 className="your-cart">Your Cart(0)</h2>
        <div className="cart-container">
          <img src={cartLogo} alt="cartLogo" className="cart-logo" />
          <p className="cart-info">Your added item will appear here</p>
        </div>
      </div>
    </>
  );
}
