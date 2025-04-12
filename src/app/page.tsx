'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { useProducts } from './context/ProductContext';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { filteredProducts, isLoading } = useProducts();
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', category);
    window.history.pushState({}, '', `/?${params.toString()}`);
  };

  const displayedProducts = activeCategory === 'all'
    ? filteredProducts
    : filteredProducts.filter(product => product.category === activeCategory);

  return (
    <main className="flex min-h-screen">
      <Sidebar 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="flex-1 ml-[25%]">
        <Header />
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16">
          {isLoading ? (
            [...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg aspect-[3/4] animate-pulse" />
            ))
          ) : displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No products found
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
