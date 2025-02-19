import React from 'react'
import ViewCategory from '../../../../swift-shop/component/category/category'

const page = ({params}) => {
    console.log(params.slug)
  return (
    <div>
      <ViewCategory catId = {params.slug} />
    </div>
  )
}

export default page