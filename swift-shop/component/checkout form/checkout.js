"use client";
import { Button, Card, Checkbox, Form, Input, Radio, Select } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutDataLoader } from "../../../Feature/checkoutSlice/checkoutSlice";
import Spinner from "../../../utility/spinner";
import { getUserData, getUserToken, saveCardPaymentData } from "../../utility";
import { useState } from 'react';
import useAuth from '../../customHook/useAuth';

const { Option } = Select;

const CheckoutForm = () => {
  useAuth()

  const router = useRouter();
  const { checkoutData, isLoading } = useSelector((state) => state.checkout);
  const checkoutDispatch = useDispatch();
  const user =useSelector(state=>state.user.value)
  const{email, _id, name} = user

  useEffect(() => {
    checkoutDispatch(checkoutDataLoader());
  }, [checkoutDispatch]);

  if (checkoutData.length < 1) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Spinner />
      </div>
    );
  }

  const onFinish = async (values) => {
    const {
      country,
      email,
      name,
      orderNotes,
      paymentMethod,
      phone,
      shipDifferent,
      state,
      streetAddress,
      zipCode,
    } = values;
    const deliveryInfo = {
      userName: name,
      email,
      phone,
      paymentMethod,
      grandTotal: checkoutData.grandTotal,
      products: checkoutData.items,
      state,
      streetAddress,
      zipCode,
      orderNotes,
      country,
    };
    if (paymentMethod === "cod") {
      const orderInfo = {
        name,
        email,
        paymentMethod,
        grandTotal: checkoutData.grandTotal,
        products: checkoutData.items,
        country,
        state,
        orderNotes,
        oderId: crypto.randomUUID().replace(/-/g, "").slice(0, 10),
        payment_status: "COD",
      };
      const response = await axios.post(
        "https://swift-shop-backend.vercel.app/api/v1/products/order",
        orderInfo
      );
      if (response.data.success) {
        router.push("/confirm-order");
      }
      console.log(response);
    }
    if (paymentMethod === "card") {
      const cardPamentInfo = {
        id: crypto.randomUUID(),
        userName: name,
        shipping: checkoutData.shipping,
        email,
        GrandTotal: checkoutData.grandTotal,
        products: checkoutData.items,
        deliveryInfo,
      };
      saveCardPaymentData(cardPamentInfo);
      router.push("/cardpayment");
    }
    console.log("Success:", values);
  };

  return (
    <Form
      className="min-h-[calc(100vh-280px)]"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ paymentMethod: "cod" }}
    >
      <div
        className="checkout-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Billing Information */}
        <Card style={{ width: "60%", padding: "20px" }}>
          <h2 className="text-center -mt-10 mb-5 text-3xl font-semibold">
            Billing Information
          </h2>
          <div className="flex gap-x-10">
            <Form.Item
              label="Name"
              name="name"
              
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input value={name} />
            </Form.Item>
            <Form.Item
              label="Street Address"
              name="streetAddress"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="flex gap-x-5">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
          </div>
          <div className="flex gap-x-5">
            <Form.Item
              label="Country / Region"
              name="country"
              rules={[
                { required: true, message: "Please select your country" },
              ]}
            >
              <Select placeholder="Select">
                <Option value="bd">Bangladesh</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item label="State" name="state">
              <Input />
            </Form.Item>
          </div>
          <div className="flex gap-x-5">
            <Form.Item label="Zip Code" name="zipCode">
              <Input />
            </Form.Item>
            <Form.Item name="shipDifferent" valuePropName="checked">
              <Checkbox>Ship to a different address</Checkbox>
            </Form.Item>
          </div>
          <Form.Item label="Order Notes (Optional)" name="orderNotes">
            <Input.TextArea placeholder="Notes about your order, e.g. special notes for delivery" />
          </Form.Item>
        </Card>

        {/* Order Summary */}
        <Card style={{ width: "35%", padding: "20px" }}>
          <h2>Order Summary</h2>
          {checkoutData?.items.map((item) => (
            <>
              <p>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              </p>
            </>
          ))}

          <p>Shipping: {checkoutData.shipping}</p>
          <h3>Total: {checkoutData.grandTotal}</h3>

          {/* Payment Method */}
          <h2>Payment Method</h2>
          <Form.Item name="paymentMethod">
            <Radio.Group>
              <Radio value="cod">Cash on Delivery</Radio>
              <Radio value="card">Card payment</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              Place Order
            </Button>
          </Form.Item>
        </Card>
      </div>
    </Form>
  );
};

export default CheckoutForm;
