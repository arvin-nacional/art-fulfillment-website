'use client'

import React, { useEffect, useRef } from 'react'
import {
  Zap,
  TrendingUp,
  Globe,
  Package,
  Truck,
  ShieldCheck,
  Clock,
  Users,
  BarChart,
  Target,
} from 'lucide-react'

import type { KeyHighlightsBlock as KeyHighlightsBlockProps } from '@/payload-types'

const iconMap = {
  zap: Zap,
  'trending-up': TrendingUp,
  globe: Globe,
  package: Package,
  truck: Truck,
  'shield-check': ShieldCheck,
  clock: Clock,
  users: Users,
  'bar-chart': BarChart,
  target: Target,
}

export const KeyHighlightsBlock: React.FC<KeyHighlightsBlockProps> = ({
  heading,
  subheading,
  highlights,
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
  }, [highlights])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
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
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{heading}</h2>
            )}
            {subheading && <p className="text-lg text-white">{subheading}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights?.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap] || Zap
            const colorClass = 'bg-secondary text-white'

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="card-animate border border-border rounded-xl p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 ${colorClass.split(' ')[0]} rounded-lg flex items-center justify-center`}
                >
                  <Icon className={`${colorClass.split(' ')[1]} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                <p className="text-white">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
