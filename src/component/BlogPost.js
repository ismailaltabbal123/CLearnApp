import React from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Data/Posts';

export default function CardPage() {
  const { id } = useParams();
  const post = Posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-slate-900 min-h-screen pt-24 sm:pt-5">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white text-right mb-4">{post.title}</h1>
        <p className="text-lg text-gray-300 text-right">{post.content}</p>
      </div>
    </div>
  );
}
