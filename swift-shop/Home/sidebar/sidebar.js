"use client";
import React, { useState } from "react";
import { Radio, Slider, Checkbox, Collapse, Divider } from "antd";
import Category from './category';
import PriceSlider from './slider';
import Rating from './rating';

const Sidebar = () => {
  
 



  return (
    <div style={{ width: 250, padding: 20, borderRight: "1px solid #ddd" }}>
      <Category/>

      <h3 style={{ marginTop: 20 }}>Price</h3>
      <PriceSlider/>
      <Divider/>
      <h3 style={{ marginTop: 20 }}>Rating</h3>
      <Rating/>
    </div>
  );
};

export default Sidebar;
