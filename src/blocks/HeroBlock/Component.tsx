import React from 'react'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeroBlockComponent: React.FC<HeroBlockProps> = ({
  heading,
  description,
  links,
  stats,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-primary">
              {heading}
            </h1>
            {description && <p className="text-lg text-muted-foreground max-w-xl">{description}</p>}
            {Array.isArray(links) && links.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4">
                {links.map(({ link }, i) => {
                  const isPrimary = i === 0
                  return (
                    <CMSLink
                      key={i}
                      {...link}
                      size="lg"
                      className={
                        isPrimary
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto'
                          : 'border-2 border-primary text-primary hover:bg-primary/10 w-full sm:w-auto bg-transparent'
                      }
                    />
                  )
                })}
              </div>
            )}
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="space-y-2">
                  <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-3 bg-primary/20 rounded w-1/2"></div>
                </div>
                {Array.isArray(stats) && stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-background to-muted rounded-lg p-4 text-center"
                      >
                        <p
                          className={`text-2xl font-bold ${i === 0 ? 'text-primary' : 'text-accent'}`}
                        >
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
