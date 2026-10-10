import { Suspense } from "react";
import DishList from "./DishList";

export const revalidate = 60;

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