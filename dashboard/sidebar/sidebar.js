"use client";
import { Menu } from 'antd';
import { AiFillProduct } from "react-icons/ai";
import { RiLuggageCartFill } from "react-icons/ri";
import { LiaUserCogSolid } from "react-icons/lia";
import { useRouter } from 'next/navigation';
const Sidebar = () => {
    const router = useRouter() 
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
        if (e.key === '1') {
            router.push("/dashboard/add-category");
          }
        if (e.key === '2') {
            router.push("/dashboard/view-category");
          }
        if (e.key === '3') {
            router.push("/dashboard/add-product");
          }
        if (e.key === '4') {
            router.push("/dashboard/view-products");
          }
        if (e.key === '5') {
            router.push("/dashboard/manage-orders");
          }
        if (e.key === '6') {
            router.push("/dashboard/view-customers");
          }
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
