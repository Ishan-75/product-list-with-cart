import cartLogo from "url:./public/illustration-empty-cart.svg";
import remove from "url:./public/icon-remove-item.svg";

export default function Cart({ prd }) {
 const [cart, setCart] = prd;

  const removeItem = (name) => {
  const index = cart.findIndex(item => item.name === name);
  if (index > -1) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // removes one item
    setCart(updatedCart);
  }
};

  return (
    <>
      <div className="cart">
        <h2 className="your-cart">Your Cart({cart.length})</h2>
        <div className="individual-cart-item">
          <p className="cart-item-name">Classic Tiramisu</p>
          <div className="cart-item-price-quantity">
            <p className="cart-item-quantity">1x</p>
            <p className="cart-item-price">$5.50</p>
          </div>
          <img src={remove} alt="" />
        </div>

        {cart.length === 0 ? (
          <div className="cart-container">
            <img src={cartLogo} alt="cartLogo" className="cart-logo" />
            <p className="cart-info">Your added item will appear here</p>
          </div>
        ) : (
          (() => {
            const alreadySelected = new Set();

            return cart

              .filter((item, index) =>
                alreadySelected.has(item.name)
                  ? false
                  : (alreadySelected.add(item.name), true),
              )

              .map((item, index) => {
                const selectedItemCount = cart.filter(
                  (cartItem) => cartItem.name === item.name,
                ).length;

                return (

                  
                  <div className="individual-cart-item" key={index}>
                    <p className="cart-item-name">{item.name}</p>
                    <div className="cart-item-price-quantity">
                      <p className="cart-item-quantity">
                        {selectedItemCount > 0 ? `x${selectedItemCount}` : ""}
                      </p>

                      {selectedItemCount < 1 ? (
                        <p>${item.price * selectedItemCount}</p>
                      ) : (
                        <div className="cart-item-total-all">
                          <p className="cart-item-price">@{item.price}</p>
                          <p className="cart-item-price-total">
                            ${item.price * selectedItemCount}
                          </p>
                        </div>
                      )}
                      <img src={remove} alt="Remove-key" onClick={()=> removeItem(item.name)} />
                    </div>
                  </div>
                );
              });
          })()
        )}
      </div>
    </>
  );
}
