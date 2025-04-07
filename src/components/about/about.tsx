"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function AboutUs() {
  const t = useTranslations()

  return (
    <section className='h-[calc(100vh-390px)] bg-purple-500' >
      <div className="relative w-full h-[400px] bg-red-500" >
        <Image
          src="/images/about/founders.jpg"
          alt={t('about.alt')}
          fill
        />
      </div>
    </section>
  )
}
