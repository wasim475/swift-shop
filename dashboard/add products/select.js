import { Select } from "antd";

const select = () => {
  return (
    
    <>
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
      />
    </>
  );
};

export default select;
