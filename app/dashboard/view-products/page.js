import Viewproduct from "../../../dashboard/view product/viewproduct";

async function getData() {
  const res = await fetch('https://swift-shop-backend.vercel.app/api/v1/products/get-product',{
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const page = async() => {
  const productData = await getData()

  return (
    <div>
      <Viewproduct productData={productData} />
    </div>
  );
};

export default page;
