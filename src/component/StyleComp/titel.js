import React from 'react';

export default function titel({titel}) {
  return (
    <div>
      <h1 className='text-slate-100 text-right text-4xl font-semibold mb-2' style={{ direction: 'rtl' }}>{titel}</h1>
    </div>
  );
};