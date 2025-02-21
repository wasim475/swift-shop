import ViewCustomer from "../../../dashboard/view customers/viewcustomer";
async function getData() {
  const res = await fetch(
    "https://swift-shop-backend.vercel.app/api/v1/auth/allusers",
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
  const customerData = await getData();
  // console.log(customerData)
  return (
    <div className="min-h-[calc(100vh-232px)]">
      <ViewCustomer customerData={customerData} />
    </div>
  );
};

export default page;
