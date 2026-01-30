import type { Block } from 'payload'

export const ValuesSection: Block = {
  slug: 'valuesSection',
  interfaceName: 'ValuesSectionBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Our Core Values',
    },
    {
      name: 'values',
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
            { label: 'Target', value: 'target' },
            { label: 'Users', value: 'users' },
            { label: 'Map Pin', value: 'map-pin' },
            { label: 'Zap (Lightning)', value: 'zap' },
            { label: 'Trending Up', value: 'trending-up' },
            { label: 'Globe', value: 'globe' },
            { label: 'Shield Check', value: 'shield-check' },
            { label: 'Heart', value: 'heart' },
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Star', value: 'star' },
          ],
          defaultValue: 'target',
        },
        {
          name: 'iconColor',
          type: 'select',
          required: true,
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Accent', value: 'accent' },
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
    plural: 'Values Sections',
    singular: 'Values Section',
  },
}
