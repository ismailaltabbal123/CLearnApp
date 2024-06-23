import React from 'react';

export default function titel({titel}) {
  return (
    <div>
      <h1 className='text-slate-100 text-right text-xl font-semibold mb-3' style={{ direction: 'rtl' }}>{titel}</h1>
    </div>
  );
};