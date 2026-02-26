'use client'

import React, { useEffect, useRef } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

import type { ServicesOverviewBlock as ServicesOverviewBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'

export const ServicesOverviewBlock: React.FC<ServicesOverviewBlockProps> = ({
  heading,
  subheading,
  services,
  showCTA,
  ctaText,
  ctaLink,
}) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [services])

  return (
    <section className="py-16 md:py-24 bg-[#a8c6c3]/20">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-animate {
          opacity: 0;
          transform: translateY(30px);
        }

        .card-animate.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>}
            {subheading && <p className="text-lg text-muted-foreground">{subheading}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services?.map((service, index) => {
            const iconColorClass =
              service.iconColor === 'accent'
                ? 'text-accent'
                : service.iconColor === 'secondary'
                  ? 'text-secondary'
                  : 'text-primary'

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="card-animate bg-card border border-border rounded-xl p-8 flex items-start gap-4 transition-all duration-300 hover:scale-101 hover:shadow-lg hover:shadow-black/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="shrink-0">
                  <CheckCircle className={`${iconColorClass} h-6 w-6 mt-1`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {showCTA && ctaLink && (
          <div className="mt-12 text-center">
            <CMSLink
              {...ctaLink}
              className="bg-card text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 border border-primary transition-all duration-300"
            />
          </div>
        )}
      </div>
    </section>
  )
}
