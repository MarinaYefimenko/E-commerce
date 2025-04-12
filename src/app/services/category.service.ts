import axios from 'axios';
import { API_URL } from '../constants/api.constants';
import { IProduct } from '../types/product.interface';

export const CategoryService = {
  async getAll(): Promise<string[]> {
    try {
      const { data } = await axios.get<string[]>(`${API_URL}/products/categories`);
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  async getProductsByCategory(category: string): Promise<IProduct[]> {
    try {
      const { data } = await axios.get<IProduct[]>(`${API_URL}/products/category/${category}`);
      return data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      return [];
    }
  }
}; 