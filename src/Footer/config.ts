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
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© 2025 ART Fulfillment Solutions, Inc. All rights reserved.',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
