import { useState } from "react";
import waffleWithBerries from "url:./public/image-waffle-mobile.jpg";
import addToCart from "url:./public/icon-add-to-cart.svg";
import cremeBrulee from "url:./public/image-creme-brulee-mobile.jpg";
import macaron from "url:./public/image-macaron-mobile.jpg";
import tiramisu from "url:./public/image-tiramisu-mobile.jpg";
import baklava from "url:./public/image-baklava-mobile.jpg";
import cake from "url:./public/image-cake-mobile.jpg";
import brownie from "url:./public/image-brownie-mobile.jpg";
import pannaCotta from "url:./public/image-panna-cotta-mobile.jpg";
import meringue from "url:./public/image-meringue-mobile.jpg";


const data = [
  {
    image: waffleWithBerries,
    name: "Waffle with Berries",
    category: "Waffle",
    price: "$ 6.50",
  },
  {
    image: cremeBrulee,
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: "$7.00",
  },
  {
    image: macaron,
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: tiramisu,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: "$5.50",
  },
  {
    image: baklava,
    name: "Pistachio Baklava",
    category: "Baklava",
    price: "$4.00",
  },
  {
    image: meringue,
    name: "Meringue",
    category: "Waffle",
    price: "$ 5.00",
  },
  {
    image: cake,
    name: "Red Velvet Cake",
    category: "Cake",
    price: "$4.50",
  },
  {
    image: brownie,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: "$4.50",
  },
  {
    image: pannaCotta,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: "$6.50",
  },
];


function FoodCard({ item }) {
  const { name, category, image, price } = item;
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="foodcard">
        <div className="image-container">
          <img src={image} alt={`alt-${image}`} className="image" />

          {!isAdded ? (
            <button
              className="add-to-cart-btn"
              onClick={() => setIsAdded(true)}
            >
              <img
                src={addToCart}
                alt="alt-add-to-cart"
                className="add-to-cart-icon"
              />
              Add to Cart
            </button>
          ) : (
            <div className="cart-controls">
              <button
                className="sub-quantity cart-btn"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>

              <p>{quantity}</p>

              <button
                className="add-quantity cart-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>{" "}
            </div>
          )}
        </div>
        <div className="details">
          <p className="category">{category} </p>
          <p className="name">{name}</p>
          <p className="price">{price}</p>
        </div>
      </div>
    </>
  );
}

export default function FoodCards() {
  return (
    <div className="home">
      {data.map((itemObj, key) => (
        <FoodCard item={itemObj} key={key} />
      ))}
    </div>
  );
}
