import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItems from './MenuItems';
import Category from './Category';
// import { Card, Image, Text, Group, Loader, Container, Title, Badge, Button, Center } from '@mantine/core';

const fetchProducts = async (page) => {
  const response = await axios.get(
    'https://timbu-get-all-products.reavdev.workers.dev/',
    {
      params: {
        organization_id: '0bccad417f32416fa2bbcd0d94a13739',
        reverse_sort: false,
        page: page,
        size: 6,
        Appid: 'EMIANZNOUFPUIAM',
        Apikey: 'f084bf997f3a494192129b33d5f78f9920240712184919390786',
      },
    }
  );
  return response.data;
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts(page);
        setProducts(data.items);
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [page]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;
  if (isEmpty) return <div>No products found</div>;

  return (
    <section className="align">
      <Category />
      <article className="showcase-container">
        {products.map((product) => (
          <div key={product.id}>
            <MenuItems product={product} />
          </div>
        ))}
      </article>
      <div className="my-6 flex gap-5" position="center" mt="md">
        <button
          className="btn-view"
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
        >
          Prev
        </button>
        <button className="btn-view" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </section>
  );
};

export default ProductList;

//
