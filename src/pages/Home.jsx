import React from 'react';
import { Carousel } from 'flowbite-react';

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl py-6">
      <div className='grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <img src="/images/water-filtration.png" alt="water-filtration" />
          <img src="/images/air-purifiers.png" alt="water-filtration" />
          <img src="/images/water-softener.png" alt="water-filtration" />
          <img src="/images/electronic-bidet.png" alt="water-filtration" />
        </div>
        <div className='grid'>
          <div className='pl-10 mb-10'>
            <Carousel slideInterval={2000}>
              <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              />
              <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              />
              <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              />
              <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              />
              <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              />
            </Carousel>
          </div>
          <div className='pl-10'>
            <img src="/images/under-carousel.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

