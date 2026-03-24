'use client'

import React, { useState } from 'react'
import type { AcronymValuesBlock as AcronymValuesBlockProps } from '@/payload-types'

type Value = NonNullable<AcronymValuesBlockProps['values']>[number]

export const AcronymValuesBlock: React.FC<AcronymValuesBlockProps> = ({
  heading,
  subheading,
  values,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeValue = values?.[activeIndex] as Value | undefined

  return (
    <section className="py-16 md:py-24 bg-[#a8c6c3]/15 overflow-hidden">
      <style>{`
        @keyframes acronymFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acronym-panel {
          animation: acronymFadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{heading}</h2>
          )}
          {subheading && (
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        {/* Letter Tiles */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {values?.map((v: Value, i: number) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeIndex === i
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-muted text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20'
              }`}
            >
              <span className="text-2xl md:text-3xl font-black leading-none">{v.letter}</span>
              <span
                className={`text-[9px] md:text-[10px] font-semibold mt-1.5 uppercase tracking-wide text-center px-1 line-clamp-1 ${
                  activeIndex === i ? 'text-white/70' : 'text-muted-foreground'
                }`}
              >
                {v.word}
              </span>
            </button>
          ))}
        </div>

        {/* Active Value Panel */}
        {activeValue && (
          <div
            key={activeIndex}
            className="acronym-panel rounded-3xl overflow-hidden border border-primary/10 shadow-sm"
          >
            <div className="flex flex-col md:flex-row min-h-[200px]">
              {/* Left accent panel */}
              <div className="bg-primary flex items-center justify-center p-8 md:p-10 md:w-44 shrink-0">
                <span className="text-8xl md:text-9xl font-black text-white/30 leading-none select-none">
                  {activeValue.letter}
                </span>
              </div>

              {/* Right content */}
              <div className="bg-primary/5 flex-1 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-primary/40 uppercase tracking-[0.2em]">
                    Value {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-primary/10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                  {activeValue.word}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {activeValue.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dot pagination */}
        <div className="flex justify-center gap-1.5 mt-6">
          {values?.map((_: Value, i: number) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View value ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-primary w-6' : 'bg-primary/20 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
