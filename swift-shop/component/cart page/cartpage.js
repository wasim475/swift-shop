"use client";
import { useEffect, useState } from "react";
import { Card, Checkbox, Button, InputNumber, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { cartDataLoader } from '../../../Feature/cart slice/cartSlice';
import { deleteCart } from '../../utility';
 
const { Title, Text } = Typography;

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartInfo, isLoading } = useSelector((state) => state.cartData);
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    dispatch(cartDataLoader());
  }, [dispatch]);

  useEffect(() => {
    if (cartInfo.length) {
      setCartItems(cartInfo);
    }
  }, [cartInfo]);

  const handleQuantityChange = (value, id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  const handleRemove = (id) => {
    deleteCart(id)
    const remaining = cartItems.filter(item=> item.id !== id)
    setCartItems(remaining)
    
  };

  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const selectedCartItems = cartItems.filter((item) => selectedItems.includes(item.id));
  const subtotal = selectedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const onlineFee = selectedCartItems.length > 0 ? 48 : 0;
  const total = subtotal + onlineFee;

  if (isLoading) return <Title>Loading...</Title>;

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 2 }}>
        <Checkbox 
          onChange={(e) => setSelectedItems(e.target.checked ? cartItems.map((item) => item.id) : [])}
          checked={selectedItems.length === cartItems.length && cartItems.length > 0}
        >
          Select All ({cartItems.length} Items)
        </Checkbox>
        {cartItems.map((item) => (
          <Card key={item.id} style={{ marginTop: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Checkbox checked={selectedItems.includes(item.id)} onChange={() => handleSelect(item.id)} />
              <img src={item.imageLink} alt={item.name} width={80} height={100} />
              <div style={{ flex: 1 }}>
                <Title level={5}>{item.name}</Title>
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
        <Button type="primary" block style={{ marginTop: 10 }} disabled={selectedItems.length === 0}>
          Proceed to Checkout
        </Button>
      </Card>
    </div>
  );
};

export default CartPage;
