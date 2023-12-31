import React from 'react';
import { Carousel } from 'flowbite-react';

export default function Home() {
  return (
    <div className="relative max-auto px-16 py-6">
      <div className='grid grid-cols-2 justify-items-center gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <img src="/images/home/water-filtration.png" alt="water-filtration" />
          <img src="/images/home/air-purifiers.png" alt="water-filtration" />
          <img src="/images/home/water-softener.png" alt="water-filtration" />
          <img src="/images/home/electronic-bidet.png" alt="water-filtration" />
        </div>
        <div className='grid max-w-lg'>
          <div className='pl-10'>
            <Carousel
              slideInterval={2000}
              leftControl={<svg className="h-8 w-8 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="8" y1="12" x2="16" y2="12" />  <line x1="8" y1="12" x2="12" y2="16" />  <line x1="8" y1="12" x2="12" y2="8" /></svg>}
              rightControl={<svg className="h-8 w-8 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="16" y1="12" x2="8" y2="12" />  <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>}
              className='h-96 border-8 rounded-md text-black'
            >
              <img
                className='object-scale-down h-full w-full'
                alt="slide1"
                src="/images/home/slide1.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide2"
                src="/images/home/slide2.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide3"
                src="/images/home/slide3.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide4"
                src="/images/home/slide4.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide5"
                src="/images/home/slide5.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide6"
                src="/images/home/slide6.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide7"
                src="/images/home/slide7.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide8"
                src="/images/home/slide8.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide9"
                src="/images/home/slide9.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide10"
                src="/images/home/slide10.png"
              />
              <img
                className='object-scale-down h-full w-full'
                alt="slide11"
                src="/images/home/slide11.png"
              />
            </Carousel>
          </div>
          <div className='ml-7 w-full'>
            <img className='w-full' src="/images/home/under-carousel.png" alt="coway" />
          </div>
        </div>
      </div>
      <div className='text-center pt-7 pb-3 border-b-2'>
        <img src="/images/home/coway-info.png" alt="coway-info" />
      </div>
      <div className='text-center pt-7'>
        <img src="/images/home/brand-direction.png" alt="coway-info" />
      </div>
    </div>
  );
}

