// @ts-nocheck
import React, { useState } from "react";
import { useProductStore } from "../data/ProductStore";

const Sellerboard = () => {
  const { products, addProduct, deleteProduct } = useProductStore();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct = {
      id: Math.random(),
      title,
      price: parseFloat(price),
      description,
      category,
      image,
    };

    useProductStore.getState().addProduct(newProduct);

    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      {/* Product Form */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Price</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Category</span>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Image URL</span>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="mx-auto max-w-2xl px-4 py16 sm:px6 sm:size-min-24 lg:max-w-7xl lg:px-9 ">
        <div className="grid grid-cols-1 gap-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => deleteProduct(item.id)}
                  className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellerboard;
