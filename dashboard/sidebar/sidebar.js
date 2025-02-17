"use client";
import { Menu } from 'antd';
import { AiFillProduct } from "react-icons/ai";
import { RiLuggageCartFill } from "react-icons/ri";
import { LiaUserCogSolid } from "react-icons/lia";
const Sidebar = () => {
    const items = [
        {
          key: 'sub1',
          label: 'Poducts',
          icon: <AiFillProduct />,
          children: [
            {
              key: '1',
              label: 'Add Category',
            },
            {
              key: '2',
              label: 'View Category',
            },
            {
              key: '3',
              label: 'Add Product',
            },
            {
              key: '4',
              label: 'View Products',
            },
          ],
        },
        {
            type: 'divider',
          },
        {
          key: 'sub2',
          label: 'Manage Orders',
          icon: <RiLuggageCartFill />,
          key: '5',
        },
        {
          type: 'divider',
        },
        {
          key: 'sub4',
          label: 'View Customers',
          icon: <LiaUserCogSolid />,
          key: '6',
        },
       
      ];
      const onClick = (e) => {
        console.log('click ', e);
      };
  return (
    <>
       <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </>
  )
}

export default Sidebar
