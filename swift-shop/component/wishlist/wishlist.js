"use client";
import { Table, Button, Badge, Space, Image } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { wishlistDataLoader } from '../../../Feature/wishlist slice/wishlistSlice';
import Spinner from '../../../utility/spinner';
import { deletewishlist, saveCartData } from '../../utility';
import EmptyCategoryCard from '../category/emptyCategoryCard';

const Wishlist = () => {
    const{wishlistData, isLoading} = useSelector((state)=>state.wishlist)
    const wishlistDispatch = useDispatch()
   
    const [wishlist, setWishlist] = useState(null);

  useEffect(()=>{
    wishlistDispatch(wishlistDataLoader())
  },[wishlistDispatch])

  useEffect(()=>{
    setWishlist(wishlistData)
  },[wishlistData])

  if(!wishlist){
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
          <Spinner />
        </div>
      );
  }

  const handleRemove = (pId)=>{
    console.log(pId)
    deletewishlist(pId)
    const remaining = wishlist.filter(item=> item.id !== pId)
    setWishlist(remaining)
  }

  const handleCart = (cartData)=>{
    const { name, price, imageLink, id } = cartData;
        const cartInfo = {
          name,
          price,
          imageLink,
          quantity: 1,
          originalPrice: price + 20,
          id
        };
        saveCartData(cartInfo);
  }

 

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Image src={record.imageLink} width={50} />
          {text}
        </Space>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price, record) => (
        <div>
          <span className="text-lg font-bold">${price}</span>
          
        </div>
      ),
    },
    {
      title: "Stock Status",
      dataIndex: "inStock",
      key: "inStock",
      render: (inStock, record) =>{
        
        return(
        <Badge
        
          status={parseInt(inStock)>0 ? "success" : "error"}
          text={parseInt(inStock)>0 ? "In Stock" : "Out of Stock"}
        />
)},
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
          onClick={()=>handleCart(record)}
            type="primary"
            icon={<ShoppingCartOutlined />}
            disabled={!record.inStock}
          >
            Add to Cart
          </Button>
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleRemove(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">My Wishlist</h2>
      {wishlist.length>0
      ?
      <Table columns={columns} dataSource={wishlist} pagination={false} />
      :
      <EmptyCategoryCard/>
    }
    </div>
  );
};

export default Wishlist;
