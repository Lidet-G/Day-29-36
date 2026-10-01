export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <p>
        Review your order before completing your purchase.
      </p>

      <p>
        Your checkout information is always rendered dynamically.
      </p>

      <button>
        Place order
      </button>
    </section>
  );
}