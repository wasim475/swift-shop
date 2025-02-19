import React from 'react'

const page = ({params}) => {
    console.log(params.slug)
  return (
    <div>
      <h1>ami holam {params.slug}</h1>
    </div>
  )
}

export default page