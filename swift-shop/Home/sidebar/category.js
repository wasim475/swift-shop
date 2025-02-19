"use client";

import { Collapse, Radio } from "antd";
import { useEffect, useState } from "react";
import { getCategory } from "../../../app/dataFatching/page";
import Spinner from "../../../utility/spinner";
import { useRouter } from 'next/navigation';

const Category = () => {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState(null);
  const router = useRouter()

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
            console.log("Selected Value:", e.target.value);
            router.push(`/category/${e.target.value}`)
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
