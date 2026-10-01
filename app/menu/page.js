import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 60;

const dishes = [
  {
    id: "kitfo",
    name: "Kitfo",
    category: "Main dishes",
    description:
      "Minced beef seasoned with Ethiopian spices and butter.",
    price: 450,
  },
  {
    id: "shiro",
    name: "Shiro",
    category: "Vegetarian",
    description:
      "A traditional Ethiopian chickpea stew.",
    price: 250,
  },
  {
    id: "doro-wot",
    name: "Doro Wot",
    category: "Main dishes",
    description:
      "Spicy Ethiopian chicken stew served with injera.",
    price: 500,
  },
  {
    id: "tibs",
    name: "Tibs",
    category: "Main dishes",
    description:
      "Sautéed beef with onions, peppers and spices.",
    price: 400,
  },
];

async function DishList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <article className="dish-card" key={dish.id}>
          <h3>{dish.name}</h3>

          <p>{dish.description}</p>

          <p>
            <strong>{dish.price} ETB</strong>
          </p>

          <Link href={`/menu/${dish.id}`}>
            View dish
          </Link>
        </article>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <h1>Our Menu</h1>

      <p>Explore our Ethiopian dishes.</p>

      <Suspense fallback={<p>Loading dishes...</p>}>
        <DishList />
      </Suspense>
    </>
  );
}