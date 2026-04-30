import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'
import { link } from '@/fields/link'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      maxRows: 6,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          admin: {
            description:
              'Optional — leave empty if showing logos instead (e.g. Marketplace Integration)',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'logos',
          type: 'array',
          label: 'Logos',
          admin: {
            description:
              'Optional — add marketplace/partner logos (e.g. Lazada, Shopee, Shopify, TikTok). Shown in place of the value when provided.',
            initCollapsed: true,
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Logo',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
            },
          ],
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional background image for the hero section',
      },
    },
  ],
  labels: {
    plural: 'Hero Blocks',
    singular: 'Hero Block',
  },
}
