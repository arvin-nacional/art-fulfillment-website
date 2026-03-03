import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'tagline',
      type: 'textarea',
      defaultValue:
        'Next-generation fulfillment solutions for modern brands across Philippines and ASEAN.',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '09123456789',
    },
    {
      name: 'address',
      type: 'textarea',
      defaultValue: 'General Trias, Cavite — 1,000 sqm facility launching our operations',
    },
    {
      name: 'email',
      type: 'text',
      defaultValue: 'info@artfsi.com',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Platform',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'TikTok', value: 'tiktok' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            placeholder: 'https://facebook.com/yourpage',
          },
        },
      ],
      maxRows: 3,
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© 2025 ART Fulfillment Solutions, Inc. All rights reserved.',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
