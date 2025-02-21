import ViewCategory from "../../../dashboard/view category/viewcategory";

async function getData() {
  const res = await fetch(
    "https://swift-shop-backend.vercel.app/api/v1/products/get-category"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const categoryData = await getData();
  return (
    <div>
      <ViewCategory categoryData={categoryData} />
    </div>
  );
};

export default page;
