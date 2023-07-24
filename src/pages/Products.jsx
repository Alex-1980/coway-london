import React from 'react';

export default function Products() {
  return (
    <div className="relative mx-auto max-auto px-16 py-6">
      <div className='max-auto text-center pb-3'>
        <img src="/images/products/products-head.png" alt="coway-info" />
      </div>
      <div className='max-auto text-center pb-3'>
        <img src="/images/products/products.png" alt="coway-info" />
      </div>
      <div className='max-auto text-center pb-3 border-y-2 border-slate-500'>
        <img src="/images/products/air-purifier.png" alt="coway-info" />
      </div>
      <div className='max-auto text-center pt-3 pb-3 border-b-2 border-slate-500'>
        <img src="/images/products/coway-electronic-bidet.png" alt="coway-info" />
      </div>
      <div className='max-auto text-center ml-3 pt-3 pb-3 border-slate-500'>
        <img src="/images/products/products-last.png" alt="coway-info" />
      </div>
    </div>
  );
}

