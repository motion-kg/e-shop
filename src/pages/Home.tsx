import React, { useEffect, useState } from 'react';
import productsAPI from '../api/product';

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  

  useEffect(() => {
    productsAPI.getAll().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
