'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FaShoppingCart, FaHeart, FaSearch, FaTimes } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';
import { useProducts } from '../context/ProductContext';
import { useSearch } from '../context/SearchContext';
import FavoritesModal from './FavoritesModal';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const { favorites } = useFavorites();
  const { searchProducts, clearSearch: clearProductsSearch } = useProducts();
  const { searchQuery, setSearchQuery, clearSearch } = useSearch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHomePage = pathname === '/';

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
      const params = new URLSearchParams(searchParams.toString());
      params.set('category', 'all');
      if (query) {
        params.set('q', query);
      } else {
        params.delete('q');
      }
      router.push(`/?${params.toString()}`);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHomePage && searchQuery.trim()) {
      router.push(`/?category=all&q=${encodeURIComponent(searchQuery.trim())}`);
      searchProducts(searchQuery);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowClearButton(false);
    clearProductsSearch();
    clearSearch();
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    router.push(`/?${params.toString()}`);
  };

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm fixed top-0 right-0 left-1/4 z-40">
        <form 
          onSubmit={handleSearchSubmit}
          className="relative flex-1 max-w-md"
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
        <div className="flex items-center gap-4 ml-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="relative hover:text-red-500 transition-colors"
          >
            <FaHeart className={`text-xl ${favorites.length > 0 ? 'text-red-500' : 'text-gray-800'}`} />
          </button>
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-xl text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
              0
            </span>
          </div>
        </div>
      </header>
      <FavoritesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Header; 