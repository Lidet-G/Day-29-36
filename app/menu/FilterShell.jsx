"use client";

import CategoryBar from "./CategoryBar";

export default function FilterShell({ children }) {
  return (
    <section className="filter-shell">
      <CategoryBar />

      <div className="filter-shell-content">
        {children}
      </div>
    </section>
  );
}