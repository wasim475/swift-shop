import Addproduct from "../../../dashboard/add products/addproduct";

async function getData() {
  const res = await fetch(
    "https://swift-shop-backend.vercel.app/api/v1/products/get-category",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const page = async () => {
  const data = await getData();
  // console.log(data)
  return (
    <div className="flex flex-col justify-center items-start mt-10">
      <h1 className="font-semibold text-3xl mb-6">Add Product</h1>
      <Addproduct data={data} />
    </div>
  );
};

export default page;
