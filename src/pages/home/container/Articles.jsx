import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from '../../../componenets/ArticleCard'
import {  useDispatch, useSelector } from 'react-redux';
import { changeCount } from '../../../store/actions/countActions';

const Articles = () => {
  const count = useSelector(state => state.count);
  const dispatch =useDispatch();
  const countChangeHandler =(type) => {
    dispatch(changeCount(type))
  }
  return (
    <section className='flex flex-col container mx-autp px-5 py-10'>
       <div className='flex flex-wrap md:gap-x-5 py-10'>
       <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"/>
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"/>
       </div>
       <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg'>
        <span>More Articles</span>
        <FaArrowRight className='W-3 h-3'/>
       </button>
       <div className='mt-2 flex items-center gap-x-5'>
          <button onClick={() =>countChangeHandler("INCREASE")}>Increase</button>
          {count.number}
          <button onClick={() =>countChangeHandler("DECREASE")}>Decrease</button>
       </div>
      
      
    </section>
  )
}

export default Articles
