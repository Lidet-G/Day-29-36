
import Link from "next/link";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <h3>{dish.name}</h3>

      <p>{dish.description}</p>

      <p>
        <strong>Category:</strong> {dish.category}
      </p>

      <p>
        <strong>Price:</strong> {dish.price} ETB
      </p>

      <Link href={`/menu/${dish.id}`}>
        View details
      </Link>
    </article>
  );
}