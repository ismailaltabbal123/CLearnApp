import React, { useState } from 'react';
import Card from './QCard';
import '../App.css';
import Posts from '../Data/Qdata';
import { FaSearch } from "react-icons/fa";

export default function Example() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = Posts.filter((post) =>
  post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-900 pt-24 sm:pt-5">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white text-right mb-2 sm:text-3xl">
          C محاضرات مادة لغة البرمجة
        </h2>
        <div className="flex justify-between">
          <a href="##"></a>
          <h2 className="text-md font-normal tracking-tight text-gray-400 text-right sm:text-2xl">
            لدكتور صلاح بلقاسم
          </h2>
        </div>
        <div className='flex flex-row-reverse'>
            <div className="w-full sm:w-80  rounded-lg mt-6 flex flex-row-reverse items-center bg-slate-950 border border-slate-700 px-3">
            <FaSearch className='text-slate-600'/>
            <input
                type="text"
                placeholder="أبحث عن محاضرة"
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 w-full bg-slate-950 text-slate-100 focus:outline-none"
                style={{ direction: 'rtl' }}
            />
            </div>
        </div>
        <div
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          style={{ direction: 'rtl' }}
        >
        {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center text-white text-xl">
              لا وجود لهذه المحاضرة
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
