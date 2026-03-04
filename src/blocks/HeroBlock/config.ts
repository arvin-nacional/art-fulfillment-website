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
          required: true,
          label: 'Value',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label',
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'backgroundImage',
      type: 'relationship',
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
