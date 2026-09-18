import { useCartStore } from "./cart/cartStore";

function Checkout() {
  const items = useCartStore(
    (s) => s.items
  );

  const total = useCartStore(
    (s) =>
      s.items.reduce(
        (sum, dish) => sum + dish.price,
        0
      )
  );

  const remove = useCartStore(
    (s) => s.remove
  );

  const clear = useCartStore(
    (s) => s.clear
  );

  function placeOrder() {
    alert("Order placed!");
    clear();
  }

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Checkout</h2>

      {items.map(dish => (
        <div key={dish.id}>
          <p>
            {dish.name} - {dish.price} ETB
          </p>

          <button onClick={() => remove(dish.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: {total} ETB</h3>

      <button onClick={placeOrder}>
        Place order
      </button>

      <button onClick={clear}>
        Clear cart
      </button>
    </div>
  );
}

export default Checkout;