'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Media } from '@/components/Media'
import type { ImageStatsBlock as ImageStatsBlockProps } from '@/payload-types'

export const ImageStatsBlock: React.FC<ImageStatsBlockProps> = ({
  eyebrow,
  heading,
  description,
  leftImage,
  rightImage,
  stats,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column: portrait image + stats */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Portrait image */}
            {leftImage && (
              <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-lg">
                <Media resource={leftImage} fill imgClassName="object-cover w-full h-full" />
              </div>
            )}

            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 pt-2">
                {stats.map((stat, i) => (
                  <div
                    key={stat.id || i}
                    className="flex flex-col gap-1 border-t-2 border-primary pt-3"
                  >
                    <span className="text-2xl md:text-3xl font-extrabold text-foreground leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right column: content + landscape image */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Eyebrow + Heading + Description */}
            <div className="flex flex-col gap-4">
              {eyebrow && (
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
              )}
            </div>

            {/* Landscape image */}
            {rightImage && (
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Media resource={rightImage} fill imgClassName="object-cover w-full h-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
