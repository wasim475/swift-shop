'use client'
import { useEffect, useState } from 'react';
import { getSpecificCategory } from '../../../app/dataFatching/page';
import Spinner from '../../../utility/spinner';

const ViewCategory = ({catId}) => {
    const [catData, setCatData]= useState(null)
    useEffect(()=>{
        const getData = async()=>{
            const data = await getSpecificCategory(catId)
            setCatData(data)
        }
        getData()
    },[catId])
    if (!catData) {
        return (
          <div className="flex justify-center items-center min-h-screen w-full">
            <Spinner />
          </div>
        );
      }
    console.log(catData)
  return (
    <div></div>
  );
};

export default ViewCategory;
