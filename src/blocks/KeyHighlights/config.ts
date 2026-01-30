import type { Block } from 'payload'

export const KeyHighlights: Block = {
  slug: 'keyHighlights',
  interfaceName: 'KeyHighlightsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Why Choose ART?',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Industry-leading fulfillment with reliability you can count on',
    },
    {
      name: 'highlights',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Zap (Lightning)', value: 'zap' },
            { label: 'Trending Up', value: 'trending-up' },
            { label: 'Globe', value: 'globe' },
            { label: 'Package', value: 'package' },
            { label: 'Truck', value: 'truck' },
            { label: 'Shield Check', value: 'shield-check' },
            { label: 'Clock', value: 'clock' },
            { label: 'Users', value: 'users' },
            { label: 'Bar Chart', value: 'bar-chart' },
            { label: 'Target', value: 'target' },
          ],
          defaultValue: 'zap',
        },
        {
          name: 'iconColor',
          type: 'select',
          required: true,
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Accent', value: 'accent' },
            { label: 'Secondary', value: 'secondary' },
          ],
          defaultValue: 'primary',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Key Highlights',
    singular: 'Key Highlight',
  },
}
