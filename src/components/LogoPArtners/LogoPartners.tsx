"use client"
import Image from 'next/image';

interface LogoPartnersProps {
  img: string;
  alt: string;
}

const LogoPartners = ({ images }: {images: LogoPartnersProps[]}) => {
  return (
   <div className="flex flex-wrap justify-center items-center">

      {images.map((item: LogoPartnersProps, index: number) => (
        <div key={index} className="flex-shrink-0 mx-4">
          <Image
            src={item.img}
            alt={item.alt}
            width={800}
            height={80}
            className="h-30 w-auto"
          />
        </div>
      ))}
  </div>
  )
}

export default LogoPartners;