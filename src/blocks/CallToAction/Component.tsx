import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <section className="bg-[#0a2e2a] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {richText && (
          <RichText
            className="mb-8 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-strong:text-accent"
            data={richText}
            enableGutter={false}
          />
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {(links || []).map(({ link }, i) => {
            return (
              <CMSLink
                key={i}
                {...link}
                className="bg-white text-[#0a2e2a] hover:bg-gray-100 font-medium px-8"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
