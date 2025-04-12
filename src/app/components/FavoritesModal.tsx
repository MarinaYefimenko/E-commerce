'use client';

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();

  if (!isOpen) return null;

  const handleProductClick = (productId: number) => {
    onClose();
    router.push(`/product/${productId}`);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] mx-4">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Favorites ({favorites.length})</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="text-gray-500" />
          </button>
        </div>
        <div className="p-4 overflow-auto max-h-[calc(80vh-80px)]">
          {favorites.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No favorite items yet</p>
          ) : (
            <div className="space-y-4">
              {favorites.map(product => (
                <div key={product.id} className="group relative flex gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div 
                    onClick={() => handleProductClick(product.id)}
                    className="flex gap-4 flex-1"
                  >
                    <div className="relative w-20 h-20 bg-white rounded">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium line-clamp-1">{product.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                      <p className="font-bold mt-1">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product);
                    }}
                    className="absolute top-2 right-2 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <FaTimes className="text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal; 