"use client"

import './Carousel.css';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const duplicatedImages = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <Image
              src={src}
              alt={`Logo ${index}`}
              width={150}
              height={40}
              className="h-12 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;