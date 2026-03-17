'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Zap,
  Truck,
  Globe,
  BarChart,
  Shield,
  Package,
  Clipboard,
  Settings,
  Users,
  Database,
  Target,
  Warehouse,
  MapPin,
  Snowflake,
  ShoppingBag,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react'
import { Media } from '@/components/Media'

import type { ServiceShowcaseBlock as ServiceShowcaseBlockProps } from '@/payload-types'

const iconMap: Record<string, LucideIcon> = {
  box: Box,
  zap: Zap,
  truck: Truck,
  globe: Globe,
  'bar-chart': BarChart,
  shield: Shield,
  package: Package,
  clipboard: Clipboard,
  settings: Settings,
  users: Users,
  database: Database,
  target: Target,
  warehouse: Warehouse,
  mappin: MapPin,
  snowflake: Snowflake,
  store: ShoppingBag,
}

type Service = NonNullable<ServiceShowcaseBlockProps['services']>[number]

export const ServiceShowcaseBlock: React.FC<ServiceShowcaseBlockProps> = ({
  heading,
  subheading,
  description,
  services,
}) => {
  const [visible, setVisible] = useState<boolean[]>([])
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!services) return
    setVisible(new Array(services.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            setVisible((prev) => {
              const next = [...prev]
              next[idx] = true
              return next
            })
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [services])

  return (
    <section className="pb-16 md:pb-24 pt-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(heading || subheading || description) && (
          <div className="text-center mb-16">
            {subheading && (
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                {subheading}
              </p>
            )}
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{heading}</h2>
            )}
            {description && (
              <p className="text-muted-foreground max-w-2xl mx-auto text-base">{description}</p>
            )}
          </div>
        )}

        {/* Alternating rows */}
        <div className="flex flex-col gap-0">
          {services?.map((service: Service, index: number) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Box

            const imagePos =
              service.imagePosition === 'left'
                ? 'left'
                : service.imagePosition === 'right'
                  ? 'right'
                  : index % 2 === 0
                    ? 'right'
                    : 'left'

            const imageOnRight = imagePos === 'right'
            const isVisible = visible[index]

            return (
              <div
                key={service.id || index}
                id={`service-showcase-${index}`}
                ref={(el) => {
                  rowRefs.current[index] = el
                }}
                data-index={index}
                className={`flex flex-col md:flex-row items-stretch transition-all duration-700 mt-4 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}`}
                style={{ transitionDelay: '100ms' }}
              >
                {/* Content */}
                <div
                  className={`flex-1 flex flex-col justify-center px-8 py-12 md:py-16 ${
                    imageOnRight ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {service.description && (
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  )}

                  {service.bulletPoints && service.bulletPoints.length > 0 && (
                    <ul className="space-y-3">
                      {service.bulletPoints.map((item, bi: number) => (
                        <li key={bi} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image */}
                <div
                  className={`relative w-full md:w-1/2 min-h-64 md:min-h-0 shrink-0 ${
                    imageOnRight ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  {service.image && typeof service.image === 'object' && (
                    <Media
                      resource={service.image}
                      imgClassName="object-cover"
                      fill
                      className="absolute inset-0"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
