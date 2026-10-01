import { notFound } from "next/navigation";

const dishes = [
  {
    id: "kitfo",
    name: "Kitfo",
    category: "Main dishes",
    description: "Minced beef seasoned with Ethiopian spices and butter.",
    price: 450,
  },
  {
    id: "shiro",
    name: "Shiro",
    category: "Vegetarian",
    description: "A traditional Ethiopian chickpea stew.",
    price: 250,
  },
  {
    id: "doro-wot",
    name: "Doro Wot",
    category: "Main dishes",
    description: "Spicy Ethiopian chicken stew served with injera.",
    price: 500,
  },
  {
    id: "tibs",
    name: "Tibs",
    category: "Main dishes",
    description: "Sautéed beef with onions, peppers and spices.",
    price: 400,
  },
];

export async function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <article>
      <h1>{dish.name}</h1>

      <p>
        <strong>Category:</strong> {dish.category}
      </p>

      <p>{dish.description}</p>

      <p>
        <strong>Price:</strong> {dish.price} ETB
      </p>

      <a href="/menu">← Back to menu</a>
    </article>
  );
}