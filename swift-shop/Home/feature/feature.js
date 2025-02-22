import { Card } from "antd";
import { FaTruck, FaHeadphones, FaRedo, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="w-10 h-10 text-purple-600" />, 
    title: "Free Shipping",
    description: "Free shipping on all US orders or orders above $200"
  },
  {
    icon: <FaHeadphones className="w-10 h-10 text-purple-600" />, 
    title: "24X7 Support",
    description: "Contact us 24 hours a day, 7 days a week"
  },
  {
    icon: <FaRedo className="w-10 h-10 text-purple-600" />, 
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange"
  },
  {
    icon: <FaShieldAlt className="w-10 h-10 text-purple-600" />, 
    title: "Payment Secure",
    description: "Contact us 24 hours a day, 7 days a week"
  }
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
      {features.map((feature, index) => (
        <Card key={index} className="flex flex-col items-center p-6 shadow-md" bordered>
          {feature.icon}
          <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
          <p className="text-center text-gray-500 mt-2">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}