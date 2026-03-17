'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Globe,
  Truck,
  Ship,
  Shield,
  ShoppingBag,
  Warehouse,
  Package,
  MapPin,
  Snowflake,
  Box,
  Zap,
  BarChart,
  Clipboard,
  Users,
  Target,
  LucideIcon,
} from 'lucide-react'

import type { ServiceQuickNavBlock as ServiceQuickNavBlockProps } from '@/payload-types'

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  truck: Truck,
  ship: Ship,
  shield: Shield,
  store: ShoppingBag,
  warehouse: Warehouse,
  package: Package,
  mappin: MapPin,
  snowflake: Snowflake,
  box: Box,
  zap: Zap,
  'bar-chart': BarChart,
  clipboard: Clipboard,
  users: Users,
  target: Target,
}

type NavService = NonNullable<ServiceQuickNavBlockProps['services']>[number]

export const ServiceQuickNavBlock: React.FC<ServiceQuickNavBlockProps> = ({
  heading,
  subheading,
  description,
  services,
}) => {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleScrollTo = (targetIndex: number | null | undefined) => {
    const idx = targetIndex ?? 0
    const el = document.getElementById(`service-showcase-${idx}`)
    if (!el) return
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const row1 = services?.slice(0, 4) ?? []
  const row2 = services?.slice(4, 8) ?? []

  const renderCard = (
    service: NavService,
    globalIndex: number,
    colIndex: number,
    isRow2: boolean,
    showArrow: boolean,
  ) => {
    const Icon = iconMap[service.icon as keyof typeof iconMap] || Box
    const delay = isRow2 ? (colIndex + 4) * 100 : colIndex * 100

    return (
      <button
        key={service.id || globalIndex}
        onClick={() => handleScrollTo(service.targetIndex ?? globalIndex)}
        className={`group relative bg-white border-2 border-border rounded-2xl p-5 text-center flex flex-col items-center gap-3 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer w-full ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        aria-label={`Scroll to ${service.title}`}
      >
        {/* Step number badge */}
        <div className="absolute -top-3 -left-3 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md z-10">
          {globalIndex + 1}
        </div>

        {/* Right connector arrow */}
        {showArrow && (
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 flex items-center">
            <div className="w-3 h-0.5 bg-primary/40"></div>
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-primary/60"></div>
          </div>
        )}

        {/* Icon */}
        <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        {/* Title */}
        <p className="text-sm font-semibold text-foreground leading-tight">{service.title}</p>
      </button>
    )
  }

  return (
    <section className="py-16 md:py-20 bg-muted/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Snake grid — desktop */}
        <div className="hidden md:block">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-6">
            {row1.map((service: NavService, i: number) =>
              renderCard(service, i, i, false, i < row1.length - 1),
            )}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-6 mt-5">
            {row2.map((service: NavService, i: number) =>
              renderCard(service, i + 4, i, true, i < row2.length - 1),
            )}
          </div>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {services?.map((service: NavService, i: number) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Box
            return (
              <button
                key={service.id || i}
                onClick={() => handleScrollTo(service.targetIndex ?? i)}
                className="group relative bg-white border-2 border-border rounded-2xl p-4 text-center flex flex-col items-center gap-2 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer"
                aria-label={`Scroll to ${service.title}`}
              >
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md z-10">
                  {i + 1}
                </div>
                <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-semibold text-foreground leading-tight">
                  {service.title}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
