'use client'

import React, { useEffect, useRef, useState } from 'react'
import RichText from '@/components/RichText'
import type { OurStoryBlock as OurStoryBlockProps } from '@/payload-types'

type Founder = NonNullable<OurStoryBlockProps['founders']>[number]

interface FoundersGridProps {
  founders: Founder[]
}

const COLLAPSED_MAX_HEIGHT = 220 // px – approx 8 lines

export const FoundersGrid: React.FC<FoundersGridProps> = ({ founders }) => {
  const [expanded, setExpanded] = useState(false)
  const [needsToggle, setNeedsToggle] = useState(false)
  const bioRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const overflows = bioRefs.current.some((el) => el && el.scrollHeight > COLLAPSED_MAX_HEIGHT + 8)
    setNeedsToggle(overflows)
  }, [founders])

  return (
    <>
      <div
        className="grid gap-8 grid-cols-1"
        style={{
          gridTemplateColumns:
            founders.length === 1 ? '1fr' : `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`,
        }}
      >
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

            <div className="flex flex-col gap-6 relative z-10">
              {/* Letter badge */}
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-2xl font-black text-white leading-none">
                    {founder.letter}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="relative">
                <div
                  ref={(el) => {
                    bioRefs.current[index] = el
                  }}
                  className="text-muted-foreground text-sm md:text-sm leading-relaxed transition-[max-height] duration-500 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: expanded
                      ? `${bioRefs.current[index]?.scrollHeight ?? 9999}px`
                      : `${COLLAPSED_MAX_HEIGHT}px`,
                  }}
                >
                  <RichText data={founder.bio} enableGutter={false} enableProse={false} />
                </div>

                {/* Fade overlay when collapsed */}
                {needsToggle && !expanded && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-card to-transparent"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {needsToggle && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {expanded ? 'See less' : 'See more'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
