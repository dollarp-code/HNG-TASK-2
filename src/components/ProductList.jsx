import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api =
  '/api/products?organization_id=0bccad417f32416fa2bbcd0d94a13739&reverse_sort=false&page=1&size=10&Appid=EMIANZNOUFPUIAM&Apikey=f084bf997f3a494192129b33d5f78f9920240712184919390786';

const ProductList = () => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(api);
      console.log(response);
      const data = response.data;
      if (response.status === 200) {
        console.log(data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //   return (
  //     <div>
  //       <h1>Products</h1>
  //       <ul>
  //         {products.map((product) => (
  //           <li key={product.id}>{product.name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
};

export default ProductList;
