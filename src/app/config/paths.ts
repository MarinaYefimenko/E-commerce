export const STATIC_PATHS = {
  logo: '/E-commerce/logo.png',
  favicon: '/E-commerce/favicon.ico',
  faviconPng: '/E-commerce/favicon.png',
} as const;

export const APP_PATHS = {
  home: '/',
  orders: '/orders',
  product: (id: string | number) => `/product/${id}`,
} as const; 