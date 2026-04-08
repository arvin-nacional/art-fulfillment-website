import React from 'react'
import type { OurStoryBlock as OurStoryBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const OurStoryBlock: React.FC<OurStoryBlockProps> = ({
  heading,
  tagline,
  image,
  intro,
  founders,
  founderNote,
  closingImage,
  closingParagraphs,
}) => {
  return (
    <section className="bg-background overflow-hidden">
      <style>{`
        @keyframes storyFadeUp {
          from { opacity: 0; transform: translateY(1.5rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Statement band ── */}
      <div className="bg-linear-to-br from-primary to-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col gap-10 items-center ${
              image ? 'md:flex-row md:gap-16' : 'text-center max-w-4xl mx-auto'
            }`}
            style={{ animation: 'storyFadeUp 0.7s ease-out both' }}
          >
            {/* Text side */}
            <div className={image ? 'flex-1' : ''}>
              {heading && (
                <p className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                  {heading}
                </p>
              )}
              {tagline && <h2 className="text-base md:text-lg text-white mb-6">{tagline}</h2>}
              {intro && (
                <p className="text-white/80 text-base md:text-md leading-relaxed">{intro}</p>
              )}
            </div>

            {/* Image side */}
            {image && typeof image === 'object' && (
              <div
                className="w-full md:w-[420px] shrink-0"
                style={{ animation: 'storyFadeUp 0.7s 0.15s ease-out both' }}
              >
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                  <Media resource={image} fill imgClassName="object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Founder cards (white bg — matches ServiceCards / ServicesOverview pattern) ── */}
      {founders && founders.length > 0 && (
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div
                  key={founder.id || index}
                  className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow overflow-hidden"
                  style={{ animation: `storyFadeUp 0.7s ${index * 0.12}s ease-out both` }}
                >
                  {/* Watermark letter */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none text-primary/6"
                  >
                    {founder.letter}
                  </span>

                  {/* Letter badge */}
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <span className="text-xl font-black text-white leading-none">
                      {founder.letter}
                    </span>
                  </div>

                  <div className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    <RichText data={founder.bio} enableGutter={false} enableProse={false} />
                  </div>
                </div>
              ))}
            </div>
            {/* ── Founder note ── */}
            {founderNote && (
              <div className="bg-white">
                <div
                  className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 text-center"
                  style={{ animation: 'storyFadeUp 0.7s 0.1s ease-out both' }}
                >
                  <div className="text-base md:text-lg font-semibold text-foreground">
                    <RichText data={founderNote} enableGutter={false} enableProse={false} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Closing section ── */}
      {closingParagraphs && closingParagraphs.length > 0 && (
        <div className="py-16 md:py-24 bg-[#a8c6c3]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
              {/* Image — 1 part */}
              {closingImage && typeof closingImage === 'object' && (
                <div
                  className="w-full md:flex-1"
                  style={{ animation: 'storyFadeUp 0.7s ease-out both' }}
                >
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
                    <Media resource={closingImage} fill imgClassName="object-cover" />
                  </div>
                </div>
              )}

              {/* Text — 2 parts */}
              <div
                className={`flex flex-col gap-6 ${
                  closingImage && typeof closingImage === 'object'
                    ? 'md:flex-2'
                    : 'w-full max-w-4xl mx-auto text-center'
                }`}
                style={{ animation: 'storyFadeUp 0.7s 0.12s ease-out both' }}
              >
                {closingParagraphs.map((para, index) => (
                  <div
                    key={para.id || index}
                    className={`text-base md:text-lg leading-relaxed ${
                      index === closingParagraphs.length - 1
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <RichText data={para.text} enableGutter={false} enableProse={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
