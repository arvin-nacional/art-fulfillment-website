'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Menu, X } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-3 items-center text-white">
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="text-white hover:text-white/80"
            />
          )
        })}
        {/* <ThemeSelector /> */}
      </nav>

      {/* Mobile Navigation Drawer */}
      <Drawer direction="right">
        <DrawerTrigger asChild className="md:hidden">
          <button className="p-2 text-white" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-[280px] fixed right-0 top-0 bottom-0 left-auto rounded-none border-l">
          <DrawerHeader className="flex items-center justify-end pb-4">
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <DrawerClose asChild>
              <button className="p-2" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map(({ link }, i) => {
              return (
                <DrawerClose asChild key={i}>
                  <CMSLink
                    {...link}
                    appearance="link"
                    className="text-lg py-3 px-2 hover:bg-muted rounded-md transition-colors"
                  />
                </DrawerClose>
              )
            })}
          </nav>
        </DrawerContent>
      </Drawer>
    </>
  )
}
