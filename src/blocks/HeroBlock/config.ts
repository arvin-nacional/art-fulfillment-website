import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

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
      maxRows: 2,
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
  ],
  labels: {
    plural: 'Hero Blocks',
    singular: 'Hero Block',
  },
}
