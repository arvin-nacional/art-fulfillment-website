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
  LucideIcon,
} from 'lucide-react'

import type { SolutionJourneyBlock as SolutionJourneyBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
type Step = NonNullable<SolutionJourneyBlockProps['steps']>[number]

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
}

export const SolutionJourneyBlock: React.FC<SolutionJourneyBlockProps> = ({
  heading,
  subheading,
  description,
  steps,
  showCTA,
  ctaLink,
}) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!steps) return
    setVisibleCards(new Array(steps.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index)
            setVisibleCards((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [steps])

  const row1 = steps?.slice(0, 4) ?? []
  const row2 = steps?.slice(4, 8) ?? []

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {subheading && (
            <p className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3 relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 w-8 h-0.5 bg-primary hidden sm:block"></span>
              {subheading}
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 w-8 h-0.5 bg-primary hidden sm:block"></span>
            </p>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{heading}</h2>
          )}
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">{description}</p>
          )}
        </div>

        {/* Journey Grid */}
        <div className="hidden md:block">
          {/* Row 1 */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-6">
              {row1.map((step: Step, i: number) => {
                const globalIndex = i
                const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Globe
                return (
                  <div
                    key={step.id || i}
                    ref={(el) => {
                      cardRefs.current[globalIndex] = el
                    }}
                    data-index={globalIndex}
                    className={`relative bg-white border-2 border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                      visibleCards[globalIndex]
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {/* Step number badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md z-10">
                      {globalIndex + 1}
                    </div>
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-base mb-2">{step.title}</h3>
                    {step.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    )}
                    {/* Right connector arrow (not last in row) */}
                    {i < row1.length - 1 && (
                      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 flex items-center">
                        <div className="w-3 h-0.5 bg-primary/40"></div>
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-primary/60"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            {/* Bottom connector line + curve going down-right */}
            {/* <div className="relative mt-4 flex items-center justify-end pr-3">
              <div className="flex-1 h-0.5 bg-primary/25 ml-3"></div> */}
            {/* Right arc / curve down */}
            {/* <div className="w-6 h-8 border-t-2 border-r-2 border-b-2 border-primary/40 rounded-r-full ml-0"></div>
            </div> */}
          </div>

          {/* Row 2 */}
          <div className="relative mt-5">
            {/* Top connector returning from right */}
            {/* <div className="relative mb-4 flex items-center justify-end pr-3">
              <div className="flex-1 h-0.5 bg-primary/25 ml-3"></div>
              <div className="w-6 h-8 border-b-0 border-r-2 border-t-0 border-primary/40 rounded-r-none ml-0 opacity-0"></div>
            </div> */}
            <div className="grid grid-cols-4 gap-6">
              {row2.map((step: Step, i: number) => {
                const globalIndex = i + 4
                const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Globe
                return (
                  <div
                    key={step.id || i}
                    ref={(el) => {
                      cardRefs.current[globalIndex] = el
                    }}
                    data-index={globalIndex}
                    className={`relative bg-white border-2 border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                      visibleCards[globalIndex]
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {/* Step number badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md z-10">
                      {globalIndex + 1}
                    </div>
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-base mb-2">{step.title}</h3>
                    {step.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    )}
                    {/* Right connector arrow */}
                    {i < row2.length - 1 && (
                      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 flex items-center">
                        <div className="w-3 h-0.5 bg-primary/40"></div>
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-primary/60"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* SVG snake path overlay */}
          <svg
            className="absolute inset-0 w-full pointer-events-none"
            style={{ height: '100%', top: 0, left: 0 }}
            preserveAspectRatio="none"
            aria-hidden="true"
          />
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col gap-5">
          {steps?.map((step: Step, i: number) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Globe
            return (
              <div key={step.id || i} className="flex gap-4 items-start">
                {/* Left: number + vertical line */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md shrink-0">
                    {i + 1}
                  </div>
                  {i < (steps?.length ?? 0) - 1 && (
                    <div className="flex flex-col items-center mt-2">
                      <div className="w-0.5 min-h-32 flex-1 bg-primary/40"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary/60"></div>
                    </div>
                  )}
                </div>
                {/* Right: card */}
                <div className="flex-1 bg-white border border-border rounded-2xl p-5 shadow-sm mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{step.title}</h3>
                  {step.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {showCTA && ctaLink && (
          <div className="mt-24 text-center">
            <CMSLink
              {...ctaLink}
              className="bg-white text-[#0a2e2a] hover:bg-primary hover:text-white font-medium px-8 outline-1 outline-primary transition-all duration-300"
            />
          </div>
        )}
      </div>
    </section>
  )
}
