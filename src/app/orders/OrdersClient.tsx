'use client';

import React, { useState, Suspense } from 'react';
import { useOrders } from '../context/OrdersContext';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft } from 'react-icons/fa';

function SearchParamsWrapper({ onCategoryChange }: { onCategoryChange: (category: string) => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/?${params.toString()}`);
    onCategoryChange(category);
  };

  return (
    <Sidebar activeCategory={searchParams.get('category') || 'all'} onCategoryChange={handleCategoryClick} />
  );
}

const OrdersClient = () => {
  const { orders } = useOrders();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Suspense fallback={<div className="w-64 fixed top-0 left-0 bottom-0 bg-white shadow-sm" />}>
        <SearchParamsWrapper onCategoryChange={setActiveCategory} />
      </Suspense>
      <div className="flex-1 ml-0">
        <Header />
        <div className="p-4 md:p-8 mt-16">
          <button 
            onClick={() => router.push('/')} 
            className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to main
          </button>

          <h1 className="text-3xl font-bold mb-8">My Orders</h1>
          
          {orders.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p className="text-xl mb-4">You haven't placed any orders yet</p>
              <Link 
                href="/"
                className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                      <p className="text-gray-500">
                        {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        Total: ${order.total.toFixed(2)}
                      </p>
                      <p className="text-gray-500">
                        {order.items.length} items
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="relative p-8 bg-white border border-gray-100 rounded-lg w-20 h-20">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                          <p className="text-red-600 font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="font-semibold mb-2">Shipping Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500">Name</p>
                        <p>{order.customer.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p>{order.customer.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Address</p>
                        <p>{order.customer.address}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p>{order.customer.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersClient; 