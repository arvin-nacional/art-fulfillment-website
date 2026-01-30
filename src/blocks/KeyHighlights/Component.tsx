import React from 'react'
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
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>}
            {subheading && <p className="text-lg text-muted-foreground">{subheading}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights?.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap] || Zap
            const colorClass =
              highlight.iconColor === 'accent'
                ? 'bg-accent/10 text-accent'
                : highlight.iconColor === 'secondary'
                  ? 'bg-secondary/10 text-secondary'
                  : 'bg-primary/10 text-primary'

            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 space-y-4"
              >
                <div
                  className={`w-12 h-12 ${colorClass.split(' ')[0]} rounded-lg flex items-center justify-center`}
                >
                  <Icon className={`${colorClass.split(' ')[1]} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
