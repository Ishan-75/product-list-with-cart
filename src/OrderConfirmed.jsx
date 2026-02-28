import confirm from "url:./public/icon-order-confirmed.svg"
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
        <img src={confirm} alt="tick   "/>
          <p className="order-confirmed pop">Order confirmed</p>
          <p className="order-confirmed-info pop">We hope you enjoy your food!</p>

          {cartItems.map((item) => (
            <div className="individual-cart-item pop" key={item.name}>
              <p className="cart-item-name pop">{item.name}</p>

              <div className="cart-item-price-quantity pop">
                <p className="cart-item-quantity pop">x{item.quantity}</p>

                <div className="cart-item-total-all pop">
                  <p className="cart-item-price pop">@{item.price}</p>
                  <p className="cart-item-price-total pop">
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
