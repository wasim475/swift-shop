"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { createCheckoutSession } from '../../../app/action/stripe';
import { Card } from 'antd';
import { getcardPaymentData } from '../../utility';
import Spinner from '../../../utility/spinner';

export const Cardpayment = () => {
    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        
        const storedData = getcardPaymentData()
        
            setPaymentInfo(storedData);
        
    }, []);

    
    if (!paymentInfo) {
      return (
        <div className="flex justify-center items-center min-h-screen w-full">
          <Spinner />
        </div>
      );
    }

    const formAction = async (event) => {
        event.preventDefault();
        const { GrandTotal, products, userName, email, id } = paymentInfo;
        const data = {
            name: userName,
            amount: GrandTotal,
            deliveryInfo: paymentInfo.deliveryInfo
        };

        const { url } = await createCheckoutSession(data);
        window.location.assign(url);
    };

    return (
        <form onSubmit={formAction}>
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
                                    <td className="p-2 text-right">{(item.quantity * item.price).toFixed(2)}</td>
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
                    <Button type="submit" variant="ghost" className="text-white gap-1 w-full bg-blue-500">
                        Pay Now
                    </Button>
                </Card>
            </div>
        </form>
    );
};
