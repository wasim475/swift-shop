"use client";

import { Collapse, Radio } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategory } from "../../../app/dataFatching/datafatching";
import Spinner from "../../../utility/spinner";

const Category = () => {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const data = await getCategory();
      setCategoryData(data);
    };
    getData();
  }, []);

  if (!categoryData) {
    return <Spinner />;
  }

  const collapseItems = [
    {
      key: "1",
      label: "Select Category",
      children: (
        <Radio.Group
          onChange={(e) => {
            router.push(`/products/${e.target.value}`);
            setCategory(e.target.value);
          }}
          value={category}
        >
          {categoryData.map((item) => (
            <Radio key={item._id} value={item._id}>
              {item.name}
            </Radio>
          ))}
        </Radio.Group>
      ),
    },
  ];

  return (
    <>
      <h3>All Categories</h3>
      <Collapse defaultActiveKey={["1"]} items={collapseItems} />
    </>
  );
};

export default Category;
