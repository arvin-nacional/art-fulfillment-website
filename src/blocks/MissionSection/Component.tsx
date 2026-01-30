import React from 'react'

import type { MissionSectionBlock as MissionSectionBlockProps } from '@/payload-types'

export const MissionSectionBlock: React.FC<MissionSectionBlockProps> = ({
  heading,
  paragraphs,
  bulletPoints,
  stats,
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {heading && <h2 className="text-3xl font-bold">{heading}</h2>}
            {paragraphs?.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph.text}
              </p>
            ))}
            {bulletPoints && bulletPoints.length > 0 && (
              <div className="space-y-4 pt-4">
                {bulletPoints.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full shrink-0 ${
                        bullet.color === 'accent' ? 'bg-accent' : 'bg-primary'
                      }`}
                    ></div>
                    <p className="text-muted-foreground">{bullet.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            {stats?.map((stat, index) => (
              <div key={index}>
                <p
                  className={`font-bold mb-2 ${
                    stat.size === 'medium' ? 'text-2xl' : 'text-4xl'
                  } ${stat.color === 'accent' ? 'text-accent' : 'text-primary'}`}
                >
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
