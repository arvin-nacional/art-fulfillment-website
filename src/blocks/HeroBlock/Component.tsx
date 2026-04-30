import React from 'react'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const HeroBlockComponent: React.FC<HeroBlockProps> = ({
  heading,
  description,
  links,
  stats,
  backgroundImage,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#a8c6c3]/20 py-16 md:py-32 2xl:h-[80vh] flex items-center">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(2rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeRight {
          from { opacity: 0; transform: translateX(2rem); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .hero-fade-up   { animation: heroFadeUp 0.7s ease-out both; }
        .hero-fade-right { animation: heroFadeRight 0.7s ease-out both; }
      `}</style>
      {backgroundImage && typeof backgroundImage === 'object' && backgroundImage.url && (
        <div className="absolute inset-0 z-0">
          <Media
            resource={backgroundImage}
            fill
            imgClassName="object-cover"
            className="absolute inset-0"
            priority
          />
          {/* <Image
            src={getMediaUrl(backgroundImage)}
            alt={backgroundImage.alt || ''}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          /> */}
          <div className="absolute inset-0 bg-linear-to-b from-[#323F3F]/60 to-black/75"></div>
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid max-md:grid-cols-1 grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight text-white hero-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              {heading}
            </h1>
            {description && (
              <p
                className={`text-lg ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'} max-w-xl hero-fade-up`}
                style={{ animationDelay: '0.25s' }}
              >
                {description}
              </p>
            )}
            {Array.isArray(links) && links.length > 0 && (
              <div
                className="flex flex-col sm:flex-row gap-4 max-sm:w-full hero-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                {links.map(({ link }, i) => {
                  const isPrimary = i === 0
                  return (
                    <CMSLink
                      key={i}
                      {...link}
                      size="lg"
                      className={
                        isPrimary
                          ? backgroundImage
                            ? 'bg-white hover:bg-white/90 text-primary w-full sm:w-auto'
                            : 'bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto'
                          : backgroundImage
                            ? 'border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent hover:text-white'
                            : 'border-2 border-primary text-primary hover:bg-primary/10 w-full sm:w-auto bg-transparent hover:text-primary'
                      }
                    />
                  )
                })}
              </div>
            )}
          </div>

          <div
            className="flex justify-center items-center hero-fade-right"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card/20  rounded-2xl p-8">
                {Array.isArray(stats) && stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    {stats.map((stat, i) => {
                      const hasLogos = Array.isArray(stat.logos) && stat.logos.length > 0
                      return (
                        <div
                          key={i}
                          className="bg-linear-to-br from-background to-muted/80 rounded-lg p-4 text-center flex flex-col items-center justify-center gap-2 hero-fade-up"
                          style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                        >
                          {stat.value && (
                            <p className="text-2xl font-bold text-primary max-sm:text-xl">
                              {stat.value}
                            </p>
                          )}
                          {hasLogos ? (
                            <div className="flex flex-wrap items-center justify-center gap-2">
                              {stat.logos!.map((logo, li) => {
                                const img = logo.image
                                if (!img || typeof img !== 'object') return null
                                return (
                                  <div
                                    key={logo.id || li}
                                    className="relative w-6 h-6 sm:w-6 sm:h-6 flex items-center justify-center"
                                  >
                                    <Media
                                      resource={img}
                                      fill
                                      imgClassName="object-contain"
                                      alt={logo.alt || img.alt || ''}
                                    />
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            stat.label && (
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            )
                          )}
                        </div>
                      )
                    })}
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
