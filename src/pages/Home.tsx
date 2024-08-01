import React, { useEffect, useState } from 'react';
import {productsAPI} from '../api/index';
import { formatCurrency } from '../utils';

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  

  useEffect(() => {
    productsAPI.getAll().then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title} - ${formatCurrency(product.price)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
