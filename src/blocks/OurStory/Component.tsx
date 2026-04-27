import React from 'react'
import type { OurStoryBlock as OurStoryBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const OurStoryBlock: React.FC<OurStoryBlockProps> = ({
  heading,
  tagline,
  image,
  intro,
  founders,
  founderNote,
  founderNoteCarousel,
  closingImage,
  closingParagraphs,
}) => {
  const carouselItems = (founderNoteCarousel ?? []).filter(
    (slide) => slide.image && typeof slide.image === 'object',
  )
  const hasCarousel = carouselItems.length > 0
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
              <a
                href="#founders"
                className="mt-8 inline-block bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow hover:bg-white/90 transition-colors"
              >
                Meet the Founders
              </a>
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
        <div id="founders" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              {founders.map((founder, index) => (
                <div
                  key={founder.id || index}
                  className="relative bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow overflow-hidden"
                  style={{ animation: `storyFadeUp 0.7s ${index * 0.12}s ease-out both` }}
                >
                  {/* Watermark letter */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-6 -right-2 text-[10rem] md:text-[14rem] font-black leading-none select-none pointer-events-none text-primary/6"
                  >
                    {founder.letter}
                  </span>

                  <div className="flex flex-col md:flex-row md:items-start md:gap-8 relative z-10">
                    {/* Letter badge */}
                    <div className="shrink-0 mb-6 md:mb-0">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                        <span className="text-2xl font-black text-white leading-none">
                          {founder.letter}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
                      <RichText data={founder.bio} enableGutter={false} enableProse={false} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* ── Founder note + Carousel ── */}
            {(founderNote || hasCarousel) && (
              <div className="pt-14 md:pt-20">
                <div
                  className={`grid gap-10 lg:gap-16 items-center ${
                    founderNote && hasCarousel ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {/* Founder note — left */}
                  {founderNote && (
                    <div
                      className={`text-base md:text-lg font-semibold text-foreground leading-relaxed ${
                        !hasCarousel ? 'max-w-3xl mx-auto text-center' : ''
                      }`}
                      style={{ animation: 'storyFadeUp 0.7s 0.1s ease-out both' }}
                    >
                      <RichText data={founderNote} enableGutter={false} enableProse={false} />
                    </div>
                  )}

                  {/* Image carousel — right */}
                  {hasCarousel && (
                    <div
                      className="w-full"
                      style={{ animation: 'storyFadeUp 0.7s 0.2s ease-out both' }}
                    >
                      <Carousel opts={{ align: 'start', loop: true }} className="w-full">
                        <CarouselContent>
                          {carouselItems.map((slide, index) => (
                            <CarouselItem key={slide.id || index}>
                              <figure className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                                {typeof slide.image === 'object' && slide.image && (
                                  <Media resource={slide.image} fill imgClassName="object-cover" />
                                )}
                                {slide.caption && (
                                  <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent text-white text-sm md:text-base font-medium px-5 py-4">
                                    {slide.caption}
                                  </figcaption>
                                )}
                              </figure>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {carouselItems.length > 1 && (
                          <>
                            <CarouselPrevious className="bg-white/90 hover:bg-white text-primary border-0 shadow-md" />
                            <CarouselNext className="bg-white/90 hover:bg-white text-primary border-0 shadow-md" />
                          </>
                        )}
                      </Carousel>
                    </div>
                  )}
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
