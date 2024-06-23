import React from 'react';
import { Link } from 'react-router-dom';
import backgroundq from '../assest/backgroundq.jpg';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export default function Card({ post }) {
  return (
    <Link to={`/Questions/${post.id}`} onClick={() => {scrollToTop()}}>
    <div className="group relative p-3 bg-slate-950 rounded-lg" onClick={() => {scrollToTop()}}>
      <div className="aspect-h-1 aspect-w-1 w-full h-48 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
        <img
          src={backgroundq}
          alt=""
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <div className='w-full'>
          <h3 className="text-2xl text-gray-700 md:text-2xl font-semibold text-right mb-2">
            <Link to={`/Questions/${post.id}`} className="text-white">
              {post.title}
            </Link>
          </h3>
          <Link to={`/Questions/${post.id}`} className="block w-full">
            <button
              type="button"
              className="mt-6 w-full flex items-center justify-center rounded-md mb-2 border border-transparent bg-cyan-900 px-8 py-3 text-base font-medium text-white"
            >
              عرض الأسئلة
            </button>
          </Link>
        </div>
      </div>
    </div>
    </Link>
  );
}
