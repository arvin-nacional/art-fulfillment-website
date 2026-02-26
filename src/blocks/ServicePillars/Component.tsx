'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Package, Truck, Settings, BarChart3, Warehouse, Shield, Check } from 'lucide-react'

import type { ServicePillarsBlock as ServicePillarsBlockProps } from '@/payload-types'

const iconMap = {
  warehouse: Warehouse,
  truck: Truck,
  settings: Settings,
  chart: BarChart3,
  package: Package,
  shield: Shield,
}

const parseFeatureText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-primary">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export const ServicePillarsBlock: React.FC<ServicePillarsBlockProps> = ({
  heading,
  subheading,
  pillars,
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#a8c6c3]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{heading}</h2>
          )}
          {subheading && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subheading}</p>
          )}
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars?.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || Package

            return (
              <div
                key={pillar.id || index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                    <IconComponent className="w-7 h-7 text-secondary" />
                  </div>

                  {/* Title & Acronym */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-1">{pillar.title}</h3>
                    {pillar.acronym && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary/20 text-secondary rounded-full">
                        {pillar.acronym}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {pillar.description && (
                    <p className="text-muted-foreground text-sm mb-6">{pillar.description}</p>
                  )}

                  {/* Features List */}
                  {pillar.features && pillar.features.length > 0 && (
                    <ul className="space-y-3">
                      {pillar.features.map((item, featureIndex) => (
                        <li
                          key={item.id || featureIndex}
                          className="flex items-start gap-3 text-foreground"
                        >
                          <span className="shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-secondary" />
                          </span>
                          <span className="text-sm leading-relaxed">
                            {parseFeatureText(item.feature || '')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Decorative gradient line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Decorative number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center border border-border">
                  <span className="text-xl font-bold text-secondary">0{index + 1}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
