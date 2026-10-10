import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Addis Eats",
  description: "Discover delicious Ethiopian food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h1>Addis Eats</h1>
        </header>

        <Providers>
          {children}
        </Providers>

        <footer className="site-footer">
          <p>© Addis Eats</p>
        </footer>
      </body>
    </html>
  );
}