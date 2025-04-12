import axios from 'axios';
import { API_URL } from '../constants/api.constants';
import { IProduct } from '../types/product.interface';

export const ProductService = {
  async getAll(): Promise<IProduct[]> {
    try {
      const { data } = await axios.get<IProduct[]>(`${API_URL}/products`);
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  async getById(id: number): Promise<IProduct> {
    try {
      const { data } = await axios.get<IProduct>(`${API_URL}/products/${id}`);
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }
}; 