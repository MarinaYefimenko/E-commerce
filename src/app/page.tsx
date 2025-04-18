'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductService } from './services/product.service';
import { IProduct } from './types/product.interface';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import { Suspense } from 'react';
import { LoadingSkeleton } from './components/LoadingSkeleton';
function ProductList() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const category = searchParams.get('category') || 'all';
        const searchQuery = searchParams.get('q') || '';
        setActiveCategory(category);

        let data: IProduct[];
        if (category === 'all') {
          data = await ProductService.getAll();
        } else {
          data = await ProductService.getByCategory(category);
        }

        if (searchQuery) {
          data = data.filter((product: IProduct) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  if (isLoading) {
    return (
      <LoadingSkeleton />
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <div className="flex-1 w-full md:w-full">
        <Header />
        <main className="p-4 md:p-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ProductList />
    </Suspense>
  );
}
