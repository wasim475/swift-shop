"use client"
import { useEffect, useState } from "react";
import { Card, Checkbox, Button, InputNumber, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { cartDataLoader } from '../../../Feature/cart slice/cartSlice';

const { Title, Text } = Typography;

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "নানাকথা ও নানাকথার পরের কথা",
      author: "সরদার ফজলুল করিম",
      price: 175,
      originalPrice: 250,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "নির্বাচিত গল্প",
      author: "মঞ্জুল আহসান সাবের",
      price: 210,
      originalPrice: 300,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const {cartInfo, isLoading} = useSelector((state)=>state.cartData)
  const cartDispatch = useDispatch()

  useEffect(()=>{
    cartDispatch(cartDataLoader())
  },[cartDispatch])

  console.log(cartInfo)

  const handleQuantityChange = (value, id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const onlineFee = 48;
  const total = subtotal + onlineFee;

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 2 }}>
        <Checkbox> Select All ({cartItems.length} Items) </Checkbox>
        {cartItems.map((item) => (
          <Card key={item.id} style={{ marginTop: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Checkbox />
              <img src={item.image} alt={item.title} width={80} height={100} />
              <div style={{ flex: 1 }}>
                <Title level={5}>{item.title}</Title>
                <Text type="secondary">{item.author}</Text>
                <div>
                  <Text strong>{item.price} Tk.</Text>
                  <Text delete style={{ marginLeft: 8 }}>
                    {item.originalPrice} Tk.
                  </Text>
                </div>
              </div>
              <InputNumber
                min={1}
                value={item.quantity}
                onChange={(value) => handleQuantityChange(value, item.id)}
              />
              <DeleteOutlined onClick={() => handleRemove(item.id)} style={{ cursor: "pointer", color: "red" }} />
            </div>
          </Card>
        ))}
      </div>

      <Card style={{ flex: 1, height: "fit-content" }}>
        <Title level={4}>Checkout Summary</Title>
        <div>
          <Text>Subtotal: {subtotal} Tk.</Text>
        </div>
        <div>
          <Text>Online Fee: {onlineFee} Tk.</Text>
        </div>
        <div>
          <Title level={5}>Payable Total: {total} Tk.</Title>
        </div>
        <Button type="primary" block style={{ marginTop: 10 }}>
          Proceed to Checkout
        </Button>
      </Card>
    </div>
  );
};

export default CartPage;
