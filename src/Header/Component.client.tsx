'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="bg-[#4C8582] sticky top-0 z-50 transition-all duration-300"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div
        className={`flex items-stretch w-full transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'}`}
      >
        {/* Logo — flush left, full navbar height */}
        <Link href="/" className="self-stretch shrink-0 overflow-hidden">
          <img
            src="/logo.jpeg"
            alt="ART Fulfillment Solutions Inc. Logo"
            className="h-full w-auto object-contain transition-all duration-300"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        {/* Nav — right side with padding */}
        <div className="flex-1 flex items-center justify-end px-4 sm:px-6 lg:px-8">
          <HeaderNav data={data} />
        </div>
      </div>
    </header>
  )
}
