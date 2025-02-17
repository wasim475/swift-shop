import React from 'react'
import Addproduct from '../../../dashboard/add products/addproduct'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-start mt-10'>
       <h1 className='font-semibold text-3xl mb-6'>Add Product</h1>
      <Addproduct/>
    </div>
  )
}

export default page
