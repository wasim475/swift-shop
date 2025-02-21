import { Button } from "antd";
import { CheckCircle } from "lucide-react";
import Link from 'next/link';

const Page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center max-w-lg">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 text-gray-800">
          🎉 Congratulations, <strong>{"Wasim"}</strong>!
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Your Payment was Successful.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Button type="primary" size="large">
            <Link href="/products">Browse Products</Link>
          </Button>
          <Button type="default" size="large">
            <Link href="/dashboard">See Dashboad</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
