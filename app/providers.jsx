"use client";

import { CartProvider } from "./Cart/CartContext";

export function Providers({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}