import axios from 'axios';
import { API_URL } from '../constants/api.constants';

export const CategoryService = {
  async getAll(): Promise<string[]> {
    try {
      const { data } = await axios.get<string[]>(`${API_URL}/products/categories`);
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
}; 