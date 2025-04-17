import { ProductService } from '../../services/product.service';
import ProductClient from './ProductClient';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const products = await ProductService.getAll();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductClient params={params} />
    </Suspense>
  );
} 