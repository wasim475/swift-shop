"use client";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDataLoader } from "../../../Feature/cart slice/cartSlice";
import Spinner from "../../../utility/spinner";
import { deleteCart, saveCheckOutData } from "../../utility";
import EmptyCategoryCard from "../category/emptyCategoryCard";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const CartPage = () => {
  const router = useRouter()
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Spinner />
      </div>
    );
  }

  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems?.map((item) =>
        item.id === id
          ? { ...item, quantity: type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    deleteCart(id);
    const remaining = cartItems?.filter((item) => item.id !== id);
    setCartItems(remaining);
  };

  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev?.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const selectedCartItems = cartItems?.filter((item) =>
    selectedItems.includes(item.id)
  );
  const subtotal = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = selectedCartItems.length > 0 ? 60 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (selectedCartItems.length === 0) {
      alert("Please select at least one item!");
      return;
    }
    router.push("/checkout")
    const checkoutInfo = {
      items: selectedCartItems,
      grandTotal: total,
      shipping
    }
    saveCheckOutData(checkoutInfo)
    // console.log("Proceeding with items:", selectedCartItems);
  };

  

  return (
    <>
      {cartItems?.length > 0 ? (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <div style={{ flex: 2 }}>
            <Checkbox
              onChange={(e) =>
                setSelectedItems(
                  e.target.checked ? cartItems?.map((item) => item.id) : []
                )
              }
              checked={
                selectedItems.length === cartItems.length &&
                cartItems.length > 0
              }
            >
              Select All ({cartItems.length} Items)
            </Checkbox>
            {cartItems.map((item) => (
              <Card key={item.id} style={{ marginTop: 10 }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />
                  <img
                    src={item.imageLink}
                    alt={item.name}
                    width={60}
                    height={80}
                  />
                  <div style={{ flex: 1 }}>
                    <Title level={5}>{item.name}</Title>
                    <Text type="secondary">{item.author}</Text>
                    <div>
                      <Text strong>{item.price} Tk.</Text>
                      <Text delete style={{ marginLeft: 8 }}>
                        {item.originalPrice} Tk.
                      </Text>
                    </div>
                    <div>
                      <Text strong>Subtotal: {item.price * item.quantity} Tk.</Text>
                    </div>
                  </div>
                  
                 
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Button
                      icon={<MinusOutlined />}
                      size="small"
                      onClick={() => handleQuantityChange(item.id, "dec")}
                      disabled={item.quantity === 1}
                    />
                    <Text strong>{item.quantity}</Text>
                    <Button
                      icon={<PlusOutlined />}
                      size="small"
                      onClick={() => handleQuantityChange(item.id, "inc")}
                    />
                  </div>

                  <DeleteOutlined
                    onClick={() => handleRemove(item.id)}
                    style={{ cursor: "pointer", color: "red" }}
                  />
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
              <Text>Delivery Charge: {shipping} Tk.</Text>
            </div>
            <div>
              <Title level={5}>Payable Total: {total} Tk.</Title>
            </div>
            <Button
              type="primary"
              block
              style={{ marginTop: 10 }}
              disabled={selectedItems.length === 0}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      ) : (
        <EmptyCategoryCard />
      )}
    </>
  );
};

export default CartPage;
