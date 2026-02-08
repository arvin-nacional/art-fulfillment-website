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
      className="bg-primary sticky top-0 z-50 transition-all duration-300"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div
        className={`container relative py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
      >
        <Link href="/">
          <Logo
            loading="eager"
            priority="high"
            logoHeight={isScrolled ? 36 : 48}
            logoWidth={isScrolled ? 50 : 66}
            color="white"
            className="transition-all duration-300"
          />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
