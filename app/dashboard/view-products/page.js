

import Viewproduct from '../../../dashboard/view product/viewproduct'

// async function getData() {
//   const res = await fetch('http://localhost:8000/api/v1/products/get-product',{
//     cache: "no-store",
//   })
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

const page =  () => {
  // const data = await getData()

 

  

 
  
  return (
    <div>
      <Viewproduct />
    </div>
  )
}

export default page
