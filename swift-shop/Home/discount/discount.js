import Link from 'next/link';

const discounts = [
  {
    image:
      "https://images.unsplash.com/photo-1599664223843-9349c75196bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    discount: "20% Off",
    title: "Canon EOS Rebel T7 DSLR",
    description:
      "High-Resolution DSLR Camera – Perfect for Photography & Videography",
  },
  {
    image:
      "https://i.ibb.co.com/BHwY0359/simon-daoudi-2w-Foa040m8g-unsplash.jpg",
    discount: "50% Off",
    title: "FitTech Pro X",
    description:
      "Premium Smart Watch – Fitness Tracking, Notifications, & More",
  },
];

export default function DiscountCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      {discounts.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-2 items-center p-6 rounded-lg shadow-lg border bg-white"
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg"
            />
            <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
              {item.discount}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.description}</p>
            <Link href={"/products"}>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Shop Now
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
