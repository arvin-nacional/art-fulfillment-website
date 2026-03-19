import type { Block } from 'payload'

export const ImageStats: Block = {
  slug: 'imageStats',
  interfaceName: 'ImageStatsBlock',
  labels: {
    plural: 'Image Stats',
    singular: 'Image Stats',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      admin: {
        description: 'Small uppercase label above heading (e.g., "STATISTICS")',
      },
    },
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
    {
      name: 'leftImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Left Image (Portrait)',
    },
    {
      name: 'rightImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Right Image (Landscape)',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Value (e.g., "99%")',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label (e.g., "Positive feedback")',
        },
      ],
    },
  ],
}
