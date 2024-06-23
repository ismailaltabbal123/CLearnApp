import React from 'react';
import Card from './Card';
import '../App.css';
import Posts from '../Data/Posts';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default function Example() {
  return (
    <div className="bg-slate-900 pt-24 sm:pt-5">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white text-right mb-2 sm:text-3xl">C محاضرات مادة لغة البرمجة</h2>
        <div className="flex justify-between">
          <Link to={"/Lectures"}
          onClick={() => {scrollToTop()}}>
          <h2 className="text-md font-normal tracking-tight text-gray-400 text-right sm:text-xl">..عرض الكل</h2>
          </Link>
          <h2 className="text-md font-normal tracking-tight text-gray-400 text-right sm:text-2xl">لدكتور صلاح بلقاسم</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" style={{ direction: 'rtl' }}>
        {Posts.map((post) => {
        if (post.id <= 3) {
        return <Card key={post.id} post={post} />;}
        return null;
      })}
        
        </div>
      </div>
    </div>
  );
}
