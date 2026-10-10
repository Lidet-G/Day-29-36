import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");
  const isSignedIn = Boolean(sessionCookie);

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <p>
        Review your order before completing your purchase.
      </p>

      {isSignedIn ? (
        <p>Your session is available.</p>
      ) : (
        <p>Please sign in before completing your order.</p>
      )}

      <button type="button" disabled={!isSignedIn}>
        Place order
      </button>
    </section>
  );
}