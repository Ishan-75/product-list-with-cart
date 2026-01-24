import "./App.css";
import Header from "./Header";
import FoodCards from "./FoodCards";
import Cart from "./Cart";


export default function App() {
  return (
    <>
      <Header />
      <div className="main-page"> 
      <FoodCards />
      <Cart/></div>
      
    </>
  );
}
