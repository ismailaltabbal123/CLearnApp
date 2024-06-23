import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css';
import Card from './QCard.js';
import Posts from '../Data/Qdata.js';


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

export default function Example() {
  
    return (
      <div  className="bg-slate-900">
        <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-xl font-bold tracking-tight text-white text-right mb-2 sm:text-3xl">C  أسئلة سنوات لمادة لغة البرمجة</h2>
        <div className='flex justify-between'>
            <Link to={'/FinalQuestions'}
            onClick={() => scrollToTop()}>
                <h2 class="text-md font-normal tracking-tight text-gray-400 text-right sm:text-xl">..عرض الكل</h2>
            </Link>
            <h2 class="text-md font-normal tracking-tight text-gray-400 text-right sm:text-2xl">للفصل الدراسي التاني</h2>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" style={{ direction: 'rtl' }}>
        {Posts.map((post) => {
        if (post.id <= 4) {
        return <Card key={post.id} post={post} />;}
        return null;
      })}
        </div>
        </div>  
        </div>
    )
}