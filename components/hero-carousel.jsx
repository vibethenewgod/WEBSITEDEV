"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero-1.jpeg",
    title: "Built on Experience.\nGuided by Continuity.",
    body: "Tomi Law Office continues a long-standing legal practice that has served clients for more than 35 years. Our firm is grounded in experience, shaped by trusted relationships, and committed to providing thoughtful, practical legal guidance through life's important decisions.",
    button: { text: "Learn More", href: "/about" },
    light: false,
  },
  {
    image: "/images/hero-2.jpeg",
    title: "Planning for Every\nSeason of Life",
    body: "",
    button: { text: "Our Services", href: "/services" },
    light: true,
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background image */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className={cn(
              "absolute inset-0",
              slide.light ? "bg-black/20" : "bg-black/45"
            )} />
          </div>

          {/* Text content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="pl-6 md:pl-12 lg:pl-32 max-w-3xl">
              <h1
                className={cn(
                  "mb-6 leading-tight whitespace-pre-line",
                  slide.light
                    ? "text-3xl md:text-5xl lg:text-6xl font-light text-white"
                    : "text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white"
                )}
              >
                {slide.title}
              </h1>

              {slide.body && (
                <p
                  className={cn(
                    "mb-10 leading-relaxed max-w-2xl",
                    slide.light
                      ? "text-base md:text-lg text-white/80 font-light"
                      : "text-base md:text-lg text-white/90 font-light"
                  )}
                >
                  {slide.body}
                </p>
              )}

              <Link
                href={slide.button.href}
                className={cn(
                  "inline-block px-7 py-3 text-sm md:text-base font-medium tracking-wide transition-all duration-300",
                  slide.light
                    ? "border border-white text-white hover:bg-white hover:text-[#1A1A1A]"
                    : "bg-[#1E72C8] text-white hover:bg-[#6BBFEA]"
                )}
              >
                {slide.button.text}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentSlide(index)
                setTimeout(() => setIsTransitioning(false), 700)
              }
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/70 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
