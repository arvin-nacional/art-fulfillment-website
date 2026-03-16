'use client'

import React, { useEffect, useRef } from 'react'
import {
  Package,
  Warehouse,
  Store,
  Snowflake,
  Truck,
  Box,
  Archive,
  Clipboard,
  ShoppingCart,
  Package2,
  Building,
  Move,
} from 'lucide-react'

import type { FixProServicesBlock as FixProServicesBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'

const iconMap = {
  package: Package,
  warehouse: Warehouse,
  store: Store,
  snowflake: Snowflake,
  truck: Truck,
  box: Box,
  archive: Archive,
  clipboard: Clipboard,
  'shopping-cart': ShoppingCart,
  'package-2': Package2,
  building: Building,
  move: Move,
}

export const FixProServicesBlock: React.FC<FixProServicesBlockProps> = ({
  heading,
  subheading,
  services,
  showCTA,
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
    <section className="relative py-16 md:py-24 bg-[#a8c6c3]/20 overflow-hidden">
      {/* Decorative shapes */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 opacity-5 transform translate-x-32 -translate-y-32">
        <div className="w-full h-full rounded-full bg-primary"></div>
      </div>
      <div className="absolute top-20 left-20 w-48 h-48 opacity-5 transform rotate-45">
        <div className="w-full h-full rounded-full bg-primary"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {heading && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-primary">
              {heading}
            </h2>
          )}
          {subheading && <p className="text-lg text-foreground">{subheading}</p>}
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services?.map((service: any, index: number) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Package

            return (
              <div
                key={service.id || index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="service-card relative bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-2 opacity-0 translate-y-8 flex-1 min-w-[300px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Box */}
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-2xl transform rotate-12"></div>
                  <div className="relative bg-secondary/20 border border-secondary/30 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Service Subtitle */}
                {service.subtitle && (
                  <p className="text-sm font-medium text-secondary mb-2 uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                )}

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-primary">
                  {service.title}
                </h3>

                {/* Service Description */}
                {service.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                )}

                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
              </div>
            )
          })}
        </div>
        {showCTA && ctaLink && (
          <div className="mt-24 text-center">
            <CMSLink
              {...ctaLink}
              className="bg-white text-[#0a2e2a] hover:bg-primary hover:text-white font-medium px-8 outline-1 outline-[#0a2e2a] transition-all duration-300"
            />
          </div>
        )}
      </div>

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

        .service-card.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
