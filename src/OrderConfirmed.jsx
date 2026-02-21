import { useState } from "react";
export default function OrderConfirmed({ prd, showPopup, setShowPopup  }) {
  const [cart, setCart] = prd;
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

  function newOrder(){
    setShowPopup(false)
    window.location.reload();
  }

  return (
    <>
      <div className="overlay">
        <div className="popup">
          <p>Order confirmed</p>

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

                
              </div>
            </div>
          ))}
          
          <div className="order-total">
            <p>Order Total</p>
            <p className="total-amount">${orderTotal}</p>
          </div>
          <button className="new-order" onClick={newOrder}>Start New Order</button>
        </div>
      </div>
    </>
  );
}
