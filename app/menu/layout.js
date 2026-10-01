export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout">
      <aside className="menu-sidebar">
        <h2>Categories</h2>

        <ul>
          <li>
            <a href="/menu">All dishes</a>
          </li>

          <li>
            <a href="/menu?category=main">Main dishes</a>
          </li>

          <li>
            <a href="/menu?category=vegetarian">Vegetarian</a>
          </li>

          <li>
            <a href="/menu?category=drinks">Drinks</a>
          </li>
        </ul>
      </aside>

      <section className="menu-content">
        {children}
      </section>
    </div>
  );
}