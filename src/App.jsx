import "./App.css";
import Header from "./Header";
import { useState } from "react";
import FoodCards from "./FoodCards";
import Cart from "./Cart";

export default function App() {
  const prdState = useState([]);
  return (
    <>
      <Header/>
      <div className="main-page">
        <FoodCards prd={prdState} />
        <Cart prd={prdState}/>
      </div>
    </>
  );
}
