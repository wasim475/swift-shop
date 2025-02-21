"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "../../../app/dataFatching/datafatching";
import Spinner from "../../../utility/spinner";
import CategoryCard from "../category/categoryCard";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    getData();
  }, []);
  if (!products) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Spinner />
      </div>
    );
  }
  console.log(products);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {products.map((item) => (
        <CategoryCard key={item._id} item={item} fromAllProduct={true} />
      ))}
    </div>
  );
};

export default Products;
