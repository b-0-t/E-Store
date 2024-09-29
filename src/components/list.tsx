// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Product } from "./data/ProductStore";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {products.map((product: Product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="card-body">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
