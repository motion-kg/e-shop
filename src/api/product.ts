import axios from 'axios';
import { Product } from '../types/common';


export const productsAPI = {
  getAll: async (): Promise<Product[]> => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  },
  getById: async (id: number): Promise<Product> => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  },
};