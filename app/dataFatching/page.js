export const getCategory = async () => {
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
};
export const getSpecificCategory = async (catId) => {
  const res = await fetch(
    `https://swift-shop-backend.vercel.app/api/v1/products/get-product/${catId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
