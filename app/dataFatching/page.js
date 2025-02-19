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
export const getAllProducts = async () => {
  const res = await fetch(
    `https://swift-shop-backend.vercel.app/api/v1/products/get-allproducts`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export const getProductBySliderValue = async (value1, value2) => {
  const res = await fetch(
    `https://swift-shop-backend.vercel.app/api/v1/products/get-sliderproduct?minPrice=${value1}&maxPrice=${value2}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
