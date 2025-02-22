"use client";

import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getAllProducts } from "../../../app/dataFatching/datafatching";
import Spinner from "../../../utility/spinner";
import CategoryCard from "../category/categoryCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      setProducts(data || []);
    };
    getData();
  }, []);

  if (!products.length) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Spinner />
      </div>
    );
  }


  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = products.slice(startIndex, startIndex + pageSize);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {paginatedData.map((item) => (
          <CategoryCard key={item._id} item={item} fromAllProduct={true} />
        ))}
      </div>

      
      {products.length > pageSize && (
        <Pagination
          className="mt-5"
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          onChange={(page, size) => {
            setCurrentPage(page);
            setPageSize(size);
          }}
          showSizeChanger
        />
      )}
    </div>
  );
};

export default Products;
