'use client';

import React, { useState } from 'react';
import { FaTimes, FaPlus, FaMinus, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrdersContext';
import Image from 'next/image';
import CheckoutForm, { CheckoutFormData } from './CheckoutForm';
import OrderConfirmation from './OrderConfirmation';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [isCheckout, setIsCheckout] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleBackToCart = () => {
    setIsCheckout(false);
  };

  const handleFormSubmit = (data: CheckoutFormData) => {
    const order = {
      date: new Date().toISOString(),
      customer: data,
      items: cartItems,
      total: totalPrice,
    };

    const newOrderId = addOrder(order);
    setOrderId(newOrderId);
    clearCart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full md:w-1/3 bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <FaShoppingCart className="text-xl" />
              <h2 className="text-xl font-semibold">Cart</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {orderId ? (
              <OrderConfirmation orderId={orderId} onClose={onClose} />
            ) : isCheckout ? (
              <CheckoutForm 
                onBack={handleBackToCart}
                onSubmit={handleFormSubmit}
              />
            ) : cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-2 border rounded-lg">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium line-clamp-2">{item.title}</h3>
                      <p className="text-red-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {!isCheckout && !orderId && (
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-bold text-red-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={clearCart}
                  disabled={cartItems.length === 0}
                  className="flex-1 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaTrash />
                  Clear Cart
                </button>
                <button 
                  onClick={handleCheckout}
                  className="flex-1 py-3 bg-green-500 text-white rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer; 