'use client'

import React, { useEffect, useRef, useState } from 'react'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeroBlockComponent: React.FC<HeroBlockProps> = ({
  heading,
  description,
  links,
  stats,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#a8c6c3]/20 py-16 md:py-32 2xl:h-[80vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight text-primary transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {heading}
            </h1>
            {description && (
              <p
                className={`text-base md:text-lg text-muted-foreground max-w-xl transition-all duration-700 delay-150 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {description}
              </p>
            )}
            {Array.isArray(links) && links.length > 0 && (
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {links.map(({ link }, i) => {
                  const isPrimary = i === 0
                  return (
                    <CMSLink
                      key={i}
                      {...link}
                      size="lg"
                      className={
                        isPrimary
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto'
                          : 'border-2 border-primary text-primary hover:bg-primary/10 w-full sm:w-auto bg-transparent hover:text-primary'
                      }
                    />
                  )
                })}
              </div>
            )}
          </div>

          <div
            className={`flex justify-center items-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8">
                {Array.isArray(stats) && stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    {stats.map((stat, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-br from-background to-muted rounded-lg p-4 text-center flex flex-col items-center justify-center transition-all duration-700 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ animationDelay: `${600 + i * 100}ms` }}
                      >
                        <p className="text-2xl font-bold text-secondary max-sm:text-xl">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
