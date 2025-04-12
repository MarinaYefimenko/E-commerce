'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaHeart, FaStar, FaImage, FaSpinner } from 'react-icons/fa';
import { IProduct } from '../types/product.interface';
import { useFavorites } from '../context/FavoritesContext';

interface ProductCardProps extends IProduct {}

const ProductCard: React.FC<ProductCardProps> = (product) => {
  const { title, price, image, rating, description, id } = product;
  const [imageError, setImageError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const router = useRouter();

  const handleDetailsClick = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      setIsLoading(true);
      await router.push(`/product/${id}`);
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square bg-white">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaImage className="text-4xl text-gray-300" />
          </div>
        )}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(product);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors shadow-sm z-10"
        >
          <FaHeart className={`text-xl ${isFavorite(id) ? 'text-red-500' : 'text-gray-400'}`} />
        </button>
        <div className="absolute bottom-3 right-3 flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating?.rate || 0}</span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-medium text-gray-900 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
        </div>
        <div className="space-y-3">
          <p className="text-xl font-bold text-red-600">${price.toFixed(2)}</p>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
            <button 
              onClick={handleDetailsClick}
              disabled={isLoading}
              className="relative w-full px-4 py-2 bg-white text-black text-sm rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="opacity-0">Details</span>
                  <FaSpinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin text-gray-600" />
                </>
              ) : (
                'Details'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 