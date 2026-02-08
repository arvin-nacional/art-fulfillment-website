import React from 'react'

import type { GoogleMapBlock as GoogleMapBlockProps } from '@/payload-types'

export const GoogleMapBlockComponent: React.FC<GoogleMapBlockProps> = ({
  embedUrl,
  height = 450,
  fullWidth = true,
}) => {
  if (!embedUrl) return null

  return (
    <section className={fullWidth ? 'w-full' : 'container'}>
      <div className="relative w-full overflow-hidden rounded-lg">
        <iframe
          src={embedUrl}
          width="100%"
          height={height ?? 450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>
    </section>
  )
}
