import React from 'react'
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
} from 'lucide-react'

import type { ServiceCardsBlock as ServiceCardsBlockProps } from '@/payload-types'

const iconMap = {
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
}

export const ServiceCardsBlock: React.FC<ServiceCardsBlockProps> = ({ heading, cards }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{heading}</h2>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards?.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            const iconBgClass = card.iconColor === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
            const iconTextClass = card.iconColor === 'accent' ? 'text-accent' : 'text-primary'

            return (
              <div
                key={index}
                className="bg-white border border-border rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow"
              >
                {Icon && (
                  <div
                    className={`w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className={`${iconTextClass} h-6 w-6`} />
                  </div>
                )}

                <h3 className="text-lg font-bold">{card.title}</h3>

                {card.description && (
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                )}

                {card.bulletPoints && card.bulletPoints.length > 0 && (
                  <ul className="space-y-2 text-sm">
                    {card.bulletPoints.map((item, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
                        <span
                          className={`${item.color === 'accent' ? 'text-accent' : 'text-primary'} font-bold mt-0.5`}
                        >
                          •
                        </span>
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
