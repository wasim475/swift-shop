import React from 'react'
import Viewproduct from '../../../dashboard/view product/viewproduct'

async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/products/get-product',{
    cache: "no-store",
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async () => {
  const data = await getData()

 
  
  return (
    <div>
      <Viewproduct data={data} />
    </div>
  )
}

export default page
