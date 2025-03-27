"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "../Language-provider"

export type CarouselItem = {
  id: number
  image: string
  title: string
  description: string
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
}

export default function Carousel({ items, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [language, setLanguage] = useState<"en" | "es" | "pt">("en")
  const { t } = useLanguage()

  // Detect browser language on component mount
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "es") {
      setLanguage("es")
    } else if (browserLang === "pt") {
      setLanguage("pt")
    } else {
      setLanguage("en")
    }
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  if (!items.length) return null

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Carousel content */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative flex w-full flex-shrink-0 flex-col md:flex-row"
            aria-hidden={index !== currentIndex}
          >
            {/* Image section (left) */}
            <div className="relative h-64 w-full md:h-96 md:w-1/2">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={t(item.title)}
                fill
                className="rounded-2xl object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content section (right) */}
            <div className="flex w-full flex-col justify-center space-y-4 bg-white p-6 md:w-1/2">
              <h3 className="text-2xl text-navy-blue font-bold text-gray-900 md:text-3xl">{t(item.title)}</h3>
              <p className="max-w-[500px] text-gray-600">{t(item.description)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={
          language === "en" ? "Previous slide" : language === "es" ? "Diapositiva anterior" : "Slide anterior"
        }
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={language === "en" ? "Next slide" : language === "es" ? "Siguiente diapositiva" : "Próximo slide"}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary",
              currentIndex === index ? "bg-primary" : "bg-gray-300 hover:bg-gray-400",
            )}
            aria-label={
              language === "en"
                ? `Go to slide ${index + 1}`
                : language === "es"
                  ? `Ir a la diapositiva ${index + 1}`
                  : `Ir para o slide ${index + 1}`
            }
            aria-current={currentIndex === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}

