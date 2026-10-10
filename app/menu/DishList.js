
import DishCard from "./DishCard";

export default function DishList({ dishes }) {
  if (dishes.length === 0) {
    return <p>No dishes are available.</p>;
  }

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}