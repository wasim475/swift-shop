import React from 'react'
import ManageOrder from '../../../dashboard/mange order/mangerorder'
async function getData() {
  const res = await fetch('https://swift-shop-backend.vercel.app/api/v1/products/get-order',{
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const page = async () => {
  const orderData = await getData()
  
  return (
    <div className="min-h-[calc(100vh-232px)]">
      <ManageOrder orderData={orderData}/>
    </div>
  )
}

export default page
