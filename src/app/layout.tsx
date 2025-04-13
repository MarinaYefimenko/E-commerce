import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ProductProvider } from "./context/ProductContext";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from "./context/OrdersContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MY Store",
  description: "Your favorite store",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ProductProvider>
          <SearchProvider>
            <FavoritesProvider>
              <CartProvider>
                <OrdersProvider>
                  {children}
                </OrdersProvider>
              </CartProvider>
            </FavoritesProvider>
          </SearchProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
