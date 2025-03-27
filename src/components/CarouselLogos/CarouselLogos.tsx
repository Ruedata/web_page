"use client"

import './CarouselLogos.css';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const CarouselLogos: React.FC<CarouselProps> = ({ images }) => {
  const duplicatedImages = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <Image
              src={src}
              alt={`Logo ${index}`}
              width={800}
              height={80}
              className="h-24 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselLogos;