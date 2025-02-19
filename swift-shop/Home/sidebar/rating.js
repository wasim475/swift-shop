import { Checkbox } from 'antd'
import React from 'react'

const Rating = () => {
  return (
    <>
      <Checkbox>⭐⭐⭐⭐⭐ 5.0</Checkbox>
      <Checkbox>⭐⭐⭐⭐ 4.0 & up</Checkbox>
      <Checkbox>⭐⭐⭐ 3.0 & up</Checkbox>
      <Checkbox>⭐⭐ 2.0 & up</Checkbox>
      <Checkbox>⭐ 1.0 & up</Checkbox>
    </>
  )
}

export default Rating
