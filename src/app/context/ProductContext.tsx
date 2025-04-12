'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ProductService } from '../services/product.service';
import { IProduct } from '../types/product.interface';

interface ProductContextType {
  products: IProduct[];
  filteredProducts: IProduct[];
  searchProducts: (query: string) => void;
  clearSearch: () => void;
  isLoading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  filteredProducts: [],
  searchProducts: () => {},
  clearSearch: () => {},
  isLoading: false,
  error: null,
});

export const useProducts = () => useContext(ProductContext);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAll();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const searchProducts = useCallback((query: string) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    const filtered = products.filter(product => {
      const titleMatch = product.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);
      return titleMatch || descriptionMatch || categoryMatch;
    });

    setFilteredProducts(filtered);
  }, [products]);

  const clearSearch = useCallback(() => {
    setFilteredProducts(products);
  }, [products]);

  const value = {
    products,
    filteredProducts,
    searchProducts,
    clearSearch,
    isLoading,
    error
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}; 