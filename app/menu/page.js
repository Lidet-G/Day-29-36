import { getDishes } from "./data";
import DishList from "./DishList";
import FilterShell from "./FilterShell";

export default async function MenuPage({ searchParams }) {
  const dishes = await getDishes();
  const params = await searchParams;
  const category = params?.category || "all";

  const categoryMap = {
    main: "Main dishes",
    vegetarian: "Vegetarian",
    drinks: "Drinks",
  };

  const filteredDishes =
    category === "all"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === categoryMap[category]
        );

  return (
    <main className="menu-page">
      <h1>Our Menu</h1>
      <p>Discover delicious Ethiopian dishes at Addis Eats.</p>

      <FilterShell>
        <DishList dishes={filteredDishes} />
      </FilterShell>
    </main>
  );
}