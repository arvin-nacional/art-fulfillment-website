import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const { tagline, phone, address, email, copyrightText, socialLinks } = footerData || {}

  return (
    <footer className="mt-auto bg-[#132d26] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo and Tagline */}
          <div>
            <Link href="/">
              <Logo logoHeight={73} logoWidth={100} color="white" className="mb-4" />
            </Link>
            {tagline && <p className="text-sm text-white/80 max-w-xs">{tagline}</p>}

            {/* Social Media Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social, index) => {
                  const getIcon = (platform: string) => {
                    switch (platform) {
                      case 'facebook':
                        return <Facebook className="w-5 h-5" />
                      case 'instagram':
                        return <Instagram className="w-5 h-5" />
                      case 'tiktok':
                        return <Image src="/tik-tok.svg" alt="TikTok" width={20} height={20} />
                      default:
                        return null
                    }
                  }

                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {getIcon(social.platform)}
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map(({ link }, i) => {
                return (
                  <CMSLink
                    className="text-sm text-white/80 hover:text-white transition-colors"
                    key={i}
                    {...link}
                  />
                )
              })}
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              {phone && <p>{phone}</p>}
              {address && <p>{address}</p>}
              {email && (
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        {copyrightText && (
          <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/60">{copyrightText}</p>
          </div>
        )}
      </div>
    </footer>
  )
}
