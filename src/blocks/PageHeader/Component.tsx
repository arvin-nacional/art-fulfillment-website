import React from 'react'

import type { PageHeaderBlock as PageHeaderBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const PageHeaderBlock: React.FC<PageHeaderBlockProps> = ({
  heading,
  description,
  backgroundImage,
}) => {
  return (
    <section className="relative py-16 md:py-32 bg-linear-to-br from-[#323F3F] to-primary">
      {backgroundImage && typeof backgroundImage === 'object' && (
        <div className="absolute inset-0 z-0">
          <Media
            resource={backgroundImage}
            fill
            imgClassName="object-cover"
            className="absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#323F3F]/80 to-secondary/50"></div>
        </div>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {heading && <h1 className="text-4xl md:text-5xl font-bold text-white">{heading}</h1>}
        {description && <p className="text-lg text-white max-w-2xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}
