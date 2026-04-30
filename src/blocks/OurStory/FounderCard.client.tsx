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
  const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set())
  const [overflowSet, setOverflowSet] = useState<Set<number>>(new Set())
  const bioRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const next = new Set<number>()
    bioRefs.current.forEach((el, i) => {
      if (el && el.scrollHeight > COLLAPSED_MAX_HEIGHT + 8) next.add(i)
    })
    setOverflowSet(next)
  }, [founders])

  const toggleOne = (i: number) => {
    setExpandedSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const allExpanded =
    overflowSet.size > 0 && Array.from(overflowSet).every((i) => expandedSet.has(i))

  const toggleAll = () => {
    setExpandedSet((prev) => {
      if (allExpanded) {
        const next = new Set(prev)
        overflowSet.forEach((i) => next.delete(i))
        return next
      }
      return new Set([...prev, ...overflowSet])
    })
  }

  const anyOverflows = overflowSet.size > 0

  return (
    <>
      <div
        className="grid gap-8 grid-cols-1"
        style={{
          gridTemplateColumns:
            founders.length === 1 ? '1fr' : `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`,
        }}
      >
        {founders.map((founder, index) => {
          const isExpanded = expandedSet.has(index)
          const overflows = overflowSet.has(index)
          return (
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
                {/* Bio */}
                <div>
                  <div className="relative">
                    <div
                      ref={(el) => {
                        bioRefs.current[index] = el
                      }}
                      className="text-muted-foreground text-sm md:text-sm leading-relaxed transition-[max-height] duration-500 ease-in-out overflow-hidden"
                      style={{
                        maxHeight: isExpanded
                          ? `${bioRefs.current[index]?.scrollHeight ?? 9999}px`
                          : `${COLLAPSED_MAX_HEIGHT}px`,
                      }}
                    >
                      <RichText data={founder.bio} enableGutter={false} enableProse={false} />
                    </div>

                    {/* Fade overlay when collapsed — bounded to bio area */}
                    {overflows && !isExpanded && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-card to-transparent"
                      />
                    )}
                  </div>

                  {/* Per-card button — mobile only */}
                  {overflows && (
                    <button
                      type="button"
                      onClick={() => toggleOne(index)}
                      aria-expanded={isExpanded}
                      className="md:hidden mt-3 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                    >
                      {isExpanded ? 'See less' : 'See more'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Shared button — desktop only */}
      {anyOverflows && (
        <div className="hidden md:flex justify-center mt-10">
          <button
            type="button"
            onClick={toggleAll}
            aria-expanded={allExpanded}
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {allExpanded ? 'See less' : 'See more'}
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
              className={`transition-transform duration-300 ${allExpanded ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
