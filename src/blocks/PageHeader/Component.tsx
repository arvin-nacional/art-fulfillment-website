import React from 'react'

import type { PageHeaderBlock as PageHeaderBlockProps } from '@/payload-types'

export const PageHeaderBlock: React.FC<PageHeaderBlockProps> = ({ heading, description }) => {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background:
          'linear-gradient(145deg, rgba(255, 255, 255, 1) 0%, rgba(224, 224, 224, 1) 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {heading && <h1 className="text-4xl md:text-5xl font-bold">{heading}</h1>}
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  )
}
