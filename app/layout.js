import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-content">
            <h1>Addis Eats</h1>

            <nav>
              <a href="/">Home</a>
              <a href="/menu">Menu</a>
              <a href="/checkout">Checkout</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <p>© 2026 Addis Eats</p>
        </footer>
      </body>
    </html>
  );
}