
# Day 38 — Server and Client Component Boundaries

## Server Components

### app/layout.js
Runs as a Server Component. It defines the root HTML structure and imports the global CSS. It passes page content into the Providers component.

### app/menu/page.js
An async Server Component. It awaits the menu data and passes the resulting dishes into DishList.

### app/menu/DishList.jsx
A Server Component. It maps over the dishes and renders a DishCard for each dish.

### app/menu/DishCard.jsx
A Server Component. It displays the name, description, category, price and details link.

### app/menu/data.js
Provides the menu data for the exercise. The data is currently local demonstration data, not a database.

## Client Components

### app/menu/CategoryBar.jsx
Uses useState and click handlers to remember the selected category button.

### app/menu/FilterShell.jsx
A Client Component that receives server-rendered content through children. It does not import DishList directly.

### app/providers.jsx
A Client Component that wraps the application in the cart provider.

### app/cart/CartContext.jsx
Uses React context and state to manage the demonstration cart.

## Why the boundary matters

Server Components are the default in the Next.js App Router. They can await data without sending their component code to the browser.

Client Components are needed for state, event handlers and context. The "use client" directive should be placed at the smallest appropriate entry point.

Passing server-rendered content as children allows a Client Component to provide an interactive shell without importing the server component into its client module graph.

## Bundle comparison

Before:
- First Load JS for /menu: record the value from the original build.

After:
- First Load JS for /menu: record the value after the changes.

Difference:
- Explain the measured change using the actual build results.
- Do not assume the size decreased; record what the build reports.