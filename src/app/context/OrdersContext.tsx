'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { IProduct } from '../types/product.interface';

interface OrderItem extends IProduct {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  customer: {
    name: string;
    email: string;
    address: string;
    phone?: string;
  };
  items: OrderItem[];
  total: number;
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id'>) => string;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const generateOrderId = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const orderNumber = orders.length + 1;
    return `ORD-${year}${month}${day}-${orderNumber}`;
  };

  const addOrder = (orderData: Omit<Order, 'id'>) => {
    const newOrder: Order = {
      ...orderData,
      id: generateOrderId(),
    };
    setOrders(prev => [...prev, newOrder]);
    return newOrder.id;
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}; 