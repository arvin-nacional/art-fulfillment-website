'use client'

import React, { useEffect, useRef } from 'react'
import {
  Target,
  Users,
  MapPin,
  Zap,
  TrendingUp,
  Globe,
  ShieldCheck,
  Heart,
  Lightbulb,
  Star,
} from 'lucide-react'

import type { ValuesSectionBlock as ValuesSectionBlockProps } from '@/payload-types'

const iconMap = {
  target: Target,
  users: Users,
  'map-pin': MapPin,
  zap: Zap,
  'trending-up': TrendingUp,
  globe: Globe,
  'shield-check': ShieldCheck,
  heart: Heart,
  lightbulb: Lightbulb,
  star: Star,
}

export const ValuesSectionBlock: React.FC<ValuesSectionBlockProps> = ({ heading, values }) => {
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
  }, [values])

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
        {heading && <h2 className="text-3xl font-bold mb-12 text-center">{heading}</h2>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values?.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap] || Target
            const bgColorClass = value.iconColor === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
            const textColorClass = value.iconColor === 'accent' ? 'text-accent' : 'text-primary'

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="card-animate bg-background border border-border rounded-xl p-8 space-y-4 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 ${bgColorClass} rounded-lg flex items-center justify-center`}
                >
                  <Icon className={`${textColorClass} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
