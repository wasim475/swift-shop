"use client"

import { Button } from "@/components/ui/button";
import { createCheckoutSession } from '../../../app/action/stripe';  // Make sure this path is correct

export const Cardpayment = () => {
  const formAction = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect data from the form
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      amount: formData.get('amount'),
      // Add more fields as needed
    };

    // Send the collected data to createCheckoutSession
    const { url } = await createCheckoutSession(data);  // Pass the data to the backend
    window.location.assign(url); // Redirect to the checkout page
  };

  return (
    <form onSubmit={formAction}>
      <input 
        type="text" 
        name="name" 
        placeholder="Enter Product Name" 
        className="mb-2 p-2 border rounded"
      />
      <input 
        type="number" 
        name="amount" 
        placeholder="Enter Quantity" 
        className="mb-2 p-2 border rounded"
      />
      
      <Button
        type="submit"
        variant="ghost"
        className="text-white gap-1 w-full bg-blue-500"
      >
        Pay Now
      </Button>
    </form>
  );
};
