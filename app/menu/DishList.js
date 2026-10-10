"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const dishes = [
  {
    id: "kitfo",
    name: "Kitfo",
    category: "main",
    description: "Minced beef seasoned with Ethiopian spices and butter.",
    price: 450,
  },
  {
    id: "shiro",
    name: "Shiro",
    category: "vegetarian",
    description: "A traditional Ethiopian chickpea stew.",
    price: 250,
  },
  {
    id: "doro-wot",
    name: "Doro Wot",
    category: "main",
    description: "Spicy Ethiopian chicken stew served with injera.",
    price: 500,
  },
  {
    id: "tibs",
    name: "Tibs",
    category: "main",
    description: "Sautéed beef with onions, peppers and spices.",
    price: 400,
  },
  {
    id: "tej",
    name: "Tej",
    category: "drinks",
    description: "A traditional Ethiopian honey drink.",
    price: 300,
  },
];

export default function DishList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const filteredDishes =
    category === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  return (
    <div className="dish-list">
      {filteredDishes.length === 0 ? (
        <p>No dishes found in this category.</p>
      ) : (
        filteredDishes.map((dish) => (
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
        ))
      )}
    </div>
  );
}