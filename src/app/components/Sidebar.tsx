'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CategoryService } from '../services/category.service';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProducts } from '../context/ProductContext';
import { useSearch } from '../context/SearchContext';
import { FaBars, FaTimes } from 'react-icons/fa';

interface SidebarProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onCategoryChange, activeCategory }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearSearch: clearProductsSearch } = useProducts();
  const { clearSearch } = useSearch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryService.getAll();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleLogoClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    params.set('category', 'all');
    router.push(`/?${params.toString()}`);
    clearProductsSearch();
    clearSearch();
  };

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md md:hidden hover:bg-gray-100 transition-colors"
      >
        {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      <aside className={`
        fixed left-0 top-0 h-screen bg-gray-50 p-5 border-r border-gray-200
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:sticky md:top-0
        w-64 md:w-1/4
        z-40
      `}>
        <div 
          className="relative h-12 w-48 mb-8 cursor-pointer"
          onClick={handleLogoClick}
        >
          <Image
            src="/logo.png"
            alt="MYFashion Logo"
            fill
            className="object-contain !w-auto"
            priority
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>
        {isLoading ? (
          <div className="space-y-2">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-10 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        ) : (
          <ul className="space-y-1">
            <li 
              onClick={() => {
                onCategoryChange('all');
                setIsMobileMenuOpen(false);
              }}
              className={`px-4 py-2 rounded cursor-pointer transition-colors capitalize ${
                activeCategory === 'all' 
                  ? 'bg-black text-white' 
                  : 'hover:bg-gray-200'
              }`}
            >
              All products
            </li>
            {categories.map((category) => (
              <li 
                key={category} 
                onClick={() => {
                  onCategoryChange(category);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded cursor-pointer transition-colors capitalize ${
                  activeCategory === category 
                    ? 'bg-black text-white' 
                    : 'hover:bg-gray-200'
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </aside>
    </>
  );
};

export default Sidebar; 