import cartLogo from "url:./public/illustration-empty-cart.svg";
import remove from "url:./public/icon-remove-item.svg";
import carbonNeutral from "url:./public/icon-carbon-neutral.svg"
import OrderConfirmed from "./OrderConfirmed";
import { useState } from "react";
export default function Cart({ prd }) {
  const [cart, setCart] = prd;
  const[showPopup, setShowPopup] = useState(false)

  const removeItem = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

 
  const groupedItems = cart.reduce((total, item) => {
    if (!total[item.name]) {
      total[item.name] = { ...item, quantity: 1 };
    } else {
      total[item.name].quantity += 1;
    }
    return total;
  }, {});

  
  
  const cartItems = Object.values(groupedItems);
  const orderTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <div className="cart-component">
      <h2 className="your-cart">Your Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <div className="cart-container">
          <img src={cartLogo} alt="cartLogo" className="cart-logo" />
          <p className="cart-info">Your added item will appear here</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="individual-cart-item" key={item.name}>
              <p className="cart-item-name">{item.name}</p>

              <div className="cart-item-price-quantity">
                <p className="cart-item-quantity">x{item.quantity}</p>

                <div className="cart-item-total-all">
                  <p className="cart-item-price">@{item.price}</p>
                  <p className="cart-item-price-total">
                    ${item.price * item.quantity}
                  </p>
                </div>

                <img
                  src={remove}
                  alt="Remove-key"
                  onClick={() => removeItem(item.name)}
                />
              </div>
            </div>
          ))}

          <div className="order-total">
            <p>Order Total</p>
            <p className="total-amount">${orderTotal}</p>
          </div>
          <div className="carbon-neutral">
            <img src={carbonNeutral} alt="carbon-neutral" />
            <p >This is carbon-neutral delivery</p>
          </div>
          <div className="confirm-btn">
            <button className="confirm" onClick={() => setShowPopup(true)}>Confirm Order</button>
            {showPopup && (
              <OrderConfirmed prd={prd} showPopup={showPopup} setShowPopup={setShowPopup} onClose={() => setShowPopup(false)} />
            )}
          </div>
        </>
      )}</div>
    </div>
  );
}