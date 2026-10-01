# Addis Eats Rendering Strategy

## `/`

Strategy: Static

The home page contains simple content that does not change for every request.

---

## `/menu`

Strategy: Revalidated

The menu uses:

```javascript
export const revalidate = 60;