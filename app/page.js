import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 60;

const dishes = [
  {
    id: "kitfo",
    name: "Kitfo",
    category: "main",
    description:
      "Minced beef seasoned with Ethiopian spices and butter.",
    price: 450,
  },
  {
    id: "shiro",
    name: "Shiro",
    category: "vegetarian",
    description:
      "A traditional Ethiopian chickpea stew.",
    price: 250,
  },
  {
    id: "doro-wot",
    name: "Doro Wot",
    category: "main",
    description:
      "Spicy Ethiopian chicken stew served with injera.",
    price: 500,
  },
  {
    id: "tibs",
    name: "Tibs",
    category: "main",
    description:
      "Sautéed beef with onions, peppers and spices.",
    price: 400,
  },
];

async function DishList({ category }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

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

export default async function MenuPage({ searchParams }) {
  const params = await searchParams;

  const category = params?.category || "all";

  return (
    <>
      <h1>Our Menu</h1>

      <p>Explore our Ethiopian dishes.</p>

      <Suspense fallback={<p>Loading dishes...</p>}>
        <DishList category={category} />
      </Suspense>
    </>
  );
}