import React from 'react';

export default function pergrap({p}) {
  return (
    <div>
      <p className='text-slate-400 text-right text-xl font-normal mb-3' style={{ direction: 'rtl' }}>{`${p}`}</p>
    </div>
  );
};