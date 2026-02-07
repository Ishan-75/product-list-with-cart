// import { useState } from "react";
// import CartBtn from "./CartBtn";
import data from "./data";
import FoodCard from "./Foodcard";

export default function FoodCards({ prd }) {
  // const [cart, setcart] = useState([]);
  return (
    <div className="home">
      {data.map((itemObj, key) => (
        <FoodCard item={itemObj} key={key} prd={prd} />
      ))}
    </div>
  );
}
