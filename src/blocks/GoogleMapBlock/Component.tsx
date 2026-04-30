import React from 'react'

import type { GoogleMapBlock as GoogleMapBlockProps } from '@/payload-types'

type LocationItem = {
  id?: string | null
  title?: string | null
  embedUrl: string
}

export const GoogleMapBlockComponent: React.FC<GoogleMapBlockProps> = ({
  locations,
  embedUrl,
  height = 450,
  fullWidth = true,
}) => {
  // Prefer the new locations array; fall back to legacy embedUrl when no locations
  const items: LocationItem[] =
    Array.isArray(locations) && locations.length > 0
      ? locations.filter((l): l is LocationItem => Boolean(l?.embedUrl))
      : embedUrl
        ? [{ embedUrl }]
        : []

  if (items.length === 0) return null

  const mapHeight = height ?? 450
  const hasMultiple = items.length > 1

  return (
    <section className={fullWidth ? 'w-full p-2 sm:p-4 lg:p-6' : 'container'}>
      <div className={`grid gap-2 ${hasMultiple ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {items.map((loc, i) => (
          <div key={loc.id || i} className="flex flex-col">
            {/* {loc.title && (
              <h3 className="text-xl md:text-2xl font-bold text-primary">{loc.title}</h3>
            )} */}
            <div className="relative w-full overflow-hidden rounded-lg">
              <iframe
                src={loc.embedUrl}
                width="100%"
                height={mapHeight}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={loc.title ? `${loc.title} Map` : 'Google Maps Location'}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
