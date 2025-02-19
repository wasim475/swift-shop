'use client'
import { useEffect, useState } from 'react';
import { getSpecificCategory } from '../../../app/dataFatching/page';
import Spinner from '../../../utility/spinner';
import Category from '../../Home/sidebar/category';
import CategoryCard from './categoryCard';
import EmptyCategoryCard from './emptyCategoryCard';

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
   
  return (
    <div className={`${catData.length>0 && 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'}`}>
        {
            catData.length>0 ?
            catData.map((item)=>(
                <CategoryCard key={item._id} item = {item} />
            ))
            :
            <EmptyCategoryCard/>
        }
    </div>
  );
};

export default ViewCategory;
