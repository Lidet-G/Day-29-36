# Addis Eats Rendering Strategy

## `/`

**Strategy: Static**

The home page contains general restaurant information.
It does not need different HTML for every visitor.

## `/menu`

**Strategy: Incremental Static Regeneration (ISR)**

The menu uses `revalidate = 60`, allowing the route
to be regenerated after its revalidation period.

Category filtering uses a client component inside
Suspense so the server page does not directly read
the query string.

## `/menu/[id]`

**Strategy: Static generation**

The `generateStaticParams()` function returns the
known dish IDs before the build.

There are five dishes, so five dish pages should be
generated during the build.

## `/checkout`

**Strategy: Dynamic rendering**

The route uses `dynamic = "force-dynamic"` and reads
the current request's session cookie with `cookies()`.

The response can depend on the visitor's session.

## Loading and error boundaries

`app/menu/loading.js` displays loading UI while the
menu segment loads.

`app/menu/error.js` provides an error boundary for
errors in the menu segment.

These files provide UI boundaries; they are not
separate public routes.

## Summary

| Route | Strategy | Reason |
|---|---|---|
| `/` | Static | General restaurant information |
| `/menu` | ISR | Menu content can be regenerated |
| `/menu/[id]` | Static generation | Dish IDs are known at build time |
| `/checkout` | Dynamic | Reads request-specific session data |