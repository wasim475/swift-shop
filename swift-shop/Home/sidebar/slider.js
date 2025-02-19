import { Slider } from 'antd'
import React, { useState } from 'react'

const PriceSlider = () => {
    const [price, setPrice] = useState([50, 1500]);

  
    const onChange = (value) => {
      console.log("onChange: ", value);
      setPrice(value); 
    };
  
    const onChangeComplete = (value) => {
      console.log("onChangeComplete: ", value);
      
    };
  return (
    <>
      <Slider
        range
        min={50}
        max={1500}
        value={price}
        onChange={onChange}
        onAfterChange={onChangeComplete}
        style={{ width: "90%" }}
      />
      <p>Price: {price[0]} - {price[1]}</p>
    </>
  )
}

export default PriceSlider
