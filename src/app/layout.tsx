import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ProductProvider } from "./context/ProductContext";
import { SearchProvider } from "./context/SearchContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MYFashion - Online Store",
  description: "Your favorite fashion store",
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
              {children}
            </FavoritesProvider>
          </SearchProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
