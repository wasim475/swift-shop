"use client"

import { Button } from "@/components/ui/button";
import { createCheckoutSession } from '../../../app/action/stripe';  // Make sure this path is correct
import { getcardPaymentData } from '../../utility';
import { Card } from 'antd';

export const Cardpayment = () => {
    const paymentInfo = getcardPaymentData()
    console.log(paymentInfo.deliveryInfo)
  const formAction = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const{GrandTotal,products, userName, email, id}= paymentInfo
    // Collect data from the form
    const formData = new FormData(event.target);
    const data = {
      name: userName,
      amount: GrandTotal,
      deliveryInfo:paymentInfo.deliveryInfo
      // Add more fields as needed
    };

    // Send the collected data to createCheckoutSession
    const { url } = await createCheckoutSession(data);  // Pass the data to the backend
    window.location.assign(url); // Redirect to the checkout page
  };

  return (
    <form onSubmit={formAction}>
      <input 
        type="hidden" 
        name="name" 
        placeholder="Enter Product Name" 
        className="mb-2 p-2 border rounded"
      />
      <input 
        type="hidden" 
        name="amount" 
        placeholder="Enter Quantity" 
        className="mb-2 p-2 border rounded"
      />

<div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Invoice</h2>
        
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-left">
                <th className="p-2">Product Name</th>
                <th className="p-2 text-right">Price ($)</th>
                <th className="p-2 text-right">Quantity</th>
                <th className="p-2 text-right">Total ($)</th>
              </tr>
            </thead>
            <tbody>
              {paymentInfo.products.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 text-right">{item.price.toFixed(2)}</td>
                  <td className="p-2 text-right">{item.quantity}</td>
                  <td className="p-2 text-right">{item.quantity * item.price}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-t-2 border-gray-400 my-4"></div>
          <div className="flex justify-between text-lg font-semibold">
            <span>Shipping fee:</span>
            <span>${paymentInfo.shipping}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span>Grand Total:</span>
            <span>${paymentInfo.GrandTotal}</span>
          </div>
          <Button
        type="submit"
        variant="ghost"
        className="text-white gap-1 w-full bg-blue-500"
      >
        Pay Now
      </Button>
        
      </Card>
    </div>
    </form>
  );
};
