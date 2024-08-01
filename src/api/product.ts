import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  // add more as necessary
}

const productsAPI = {
  getAll: async (): Promise<Product[]> => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  },
  getById: async (id: number): Promise<Product> => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  },
};

export default productsAPI;