'use client'
import { useEffect, useState } from 'react';
import { getSpecificCategory } from '../../../app/dataFatching/page';

const ViewCategory = ({catId}) => {
    const [catData, setCatData]= useState(null)
    useEffect(()=>{
        const getData = async()=>{
            const data = await getSpecificCategory(catId)
            setCatData(data)
        }
        getData()
    },[catId])
    console.log(catData)
  return (
    <div></div>
  );
};

export default ViewCategory;
