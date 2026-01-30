import React from 'react'

import type { NumberedFeaturesBlock as NumberedFeaturesBlockProps } from '@/payload-types'

export const NumberedFeaturesBlock: React.FC<NumberedFeaturesBlockProps> = ({
  heading,
  subheading,
  features,
}) => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && <h2 className="text-3xl font-bold mb-4 text-center">{heading}</h2>}
        {subheading && (
          <p className="text-lg text-muted-foreground text-center mb-12">{subheading}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features?.map((feature, index) => {
            const bgColorClass = feature.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
            const textColorClass = feature.color === 'accent' ? 'text-accent' : 'text-primary'

            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 space-y-4"
              >
                <div
                  className={`w-10 h-10 ${bgColorClass} rounded-lg flex items-center justify-center`}
                >
                  <span className={`${textColorClass} font-bold`}>{index + 1}</span>
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
