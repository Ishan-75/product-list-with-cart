import CartBtn from "./CartBtn";

export default function FoodCard({ item, prd }) {
  const { name, category, image, price } = item;
  
  return (
    <>
      <div className="foodcard">
        <div className="image-container">
          <CartBtn prd={prd} item={item} />
          <img src={image} alt={`alt-${image}`} className="image" />
        </div>


        <div className="details">
          <p className="category">{category} </p>
          <p className="name">{name}</p>
          <p className="price">${price}</p>
        </div>
      </div>
    </>
  );
}
