'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaStar, FaImage, FaArrowLeft, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types/product.interface';
import { useFavorites } from '../../context/FavoritesContext';
import { useCart } from '../../context/CartContext';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart, isInCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await ProductService.getById(parseInt(params.id));
        setProduct(data);
        if (data) {
          setActiveCategory(data.category);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    router.push('/');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product) {
      addToCart(product);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        <div className="flex-1 md:ml-[25%]">
          <Header />
          <div className="p-4 md:p-8 mt-16 w-full">
            <div className="animate-pulse">
              <div className="h-8 w-32 bg-gray-200 rounded mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gray-200 rounded-xl" />
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-32 bg-gray-200 rounded" />
                  <div className="h-12 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen">
        <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        <div className="flex-1 md:ml-[25%]">
          <Header />
          <div className="p-4 md:p-8 mt-16 w-full">
            Product not found
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <main className="flex-1">
        <Header />
        <div className="p-4 md:p-8 mt-16">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to products
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square bg-white">
                {!imageError ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FaImage className="text-6xl text-gray-300" />
                  </div>
                )}
                <button 
                  onClick={() => product && toggleFavorite(product)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors shadow-sm z-10"
                >
                  <FaHeart className={`text-2xl ${isFavorite(product.id) ? 'text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <div className="flex items-center">
                <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-medium">{product.rating?.rate || 0}</span>
                  <span className="text-gray-400 ml-1">({product.rating?.count || 0} reviews)</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-red-600">${product.price.toFixed(2)}</span>
                  {product.price < 300 && (
                    <span className="ml-2 text-gray-400 line-through">${(product.price * 1.4).toFixed(2)}</span>
                  )}
                </div>

                <button 
                  onClick={handleAddToCart}
                  className={`w-full sm:w-auto px-8 py-3 text-lg rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    isInCart(product.id) 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  <FaShoppingCart />
                  {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>

              <div className="space-y-4">
                <h2 className="font-semibold text-gray-900">Product Details</h2>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="text-gray-500 w-32">Category:</span>
                    <span className="text-gray-900 capitalize">{product.category}</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-32">Rating:</span>
                    <span className="text-gray-900">{product.rating?.rate} out of 5</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-32">Stock:</span>
                    <span className="text-gray-900">In Stock</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 