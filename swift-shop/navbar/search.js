"use client";
import React from "react";
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const Search = () => {
  const { Search } = Input;
  const prefix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#5oc878",
      }}
    />
  );
  const onSearch = (value, _e, info) => {
    console.log(value)
  };
  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="Search"
          enterButton="Search"
          size="large"
          prefix={<SearchOutlined/>}
          onSearch={onSearch}
         
        />
      </Space>
    </>
  );
};

export default Search;
