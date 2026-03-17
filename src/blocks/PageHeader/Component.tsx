import React from 'react'
import Image from 'next/image'

import type { PageHeaderBlock as PageHeaderBlockProps } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const PageHeaderBlock: React.FC<PageHeaderBlockProps> = ({
  heading,
  description,
  backgroundImage,
}) => {
  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-br from-[#323F3F] to-primary">
      {backgroundImage && typeof backgroundImage === 'object' && backgroundImage.url && (
        <div className="absolute inset-0 z-0">
          <Image
            src={getMediaUrl(backgroundImage)}
            alt={backgroundImage.alt || ''}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#323F3F]/80 to-secondary/50"></div>
        </div>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {heading && <h1 className="text-4xl md:text-5xl font-bold text-white">{heading}</h1>}
        {description && <p className="text-lg text-white max-w-2xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}
