'use client';

import React from 'react';
import { FavoritesProvider } from './context/FavoritesContext';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  );
} 