'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface OrderConfirmationProps {
  orderId: string;
  onClose: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderId, onClose }) => {
  const router = useRouter();

  const handleViewOrders = () => {
    router.push('/orders');
    onClose();
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <FaCheckCircle className="text-green-500 text-6xl mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Thank you for your order!</h2>
      <p className="text-gray-600 mb-6">
        Your order number <span className="font-medium">{orderId}</span> has been successfully placed!
      </p>
      <button
        onClick={handleViewOrders}
        className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        My Orders
      </button>
    </div>
  );
};

export default OrderConfirmation; 