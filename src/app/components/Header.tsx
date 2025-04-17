'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FaShoppingCart, FaHeart, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';
import { useProducts } from '../context/ProductContext';
import { useSearch } from '../context/SearchContext';
import { useCart } from '../context/CartContext';
import FavoritesModal from './FavoritesModal';
import CartDrawer from './CartDrawer';
import { Suspense } from 'react';
import { APP_PATHS } from '../config/paths';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const { favorites } = useFavorites();
  const { cartItems } = useCart();
  const { searchProducts, clearSearch: clearProductsSearch } = useProducts();
  const { searchQuery, setSearchQuery, clearSearch } = useSearch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHomePage = pathname === '/';
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      setShowClearButton(query.length > 0);
      searchProducts(query);
    }
  }, [searchParams, searchProducts, setSearchQuery, setShowClearButton]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowClearButton(query.length > 0);
    
    if (isHomePage) {
      searchProducts(query);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHomePage && searchQuery.trim()) {
      router.push(`${APP_PATHS.home}?category=all&q=${encodeURIComponent(searchQuery.trim())}`);
      searchProducts(searchQuery);
    } else if (isHomePage && searchQuery.trim()) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('category', 'all');
      params.set('q', searchQuery.trim());
      router.push(`${APP_PATHS.home}?${params.toString()}`);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowClearButton(false);
    clearProductsSearch();
    clearSearch();
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    router.push(`${APP_PATHS.home}?${params.toString()}`);
  };

  return (
    <>
      <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-sm fixed top-0 right-0 left-0 md:left-[25%] z-40">
        <div className="flex items-center space-x-8">
          <Suspense fallback={<div className="flex-1 max-w-2xl h-10 bg-gray-200 rounded-lg animate-pulse" />}>
            <form 
              onSubmit={handleSearchSubmit}
              className="relative flex-1 max-w-md mr-4 ml-16 md:ml-0"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-sm"
              />
              {showClearButton ? (
                <button 
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <FaTimes size={12} />
                </button>
              ) : null}
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaSearch />
              </button>
            </form>
          </Suspense>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="relative hover:text-red-500 transition-colors"
          >
            <FaHeart className={`text-xl ${favorites.length > 0 ? 'text-red-500' : 'text-gray-800'}`} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 rounded-full"
          >
            <FaShoppingCart className="text-xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          <button 
            onClick={() => router.push(APP_PATHS.orders.replace('/E-commerce/E-commerce', '/E-commerce'))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaUser className="text-xl" />
          </button>
        </div>
      </header>
      <FavoritesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header; 