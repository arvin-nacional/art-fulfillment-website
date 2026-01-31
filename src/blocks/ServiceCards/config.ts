import type { Block } from 'payload'

export const ServiceCards: Block = {
  slug: 'serviceCards',
  interfaceName: 'ServiceCardsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Complete Fulfillment Solutions',
    },
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Box', value: 'box' },
            { label: 'Zap (Lightning)', value: 'zap' },
            { label: 'Truck', value: 'truck' },
            { label: 'Globe', value: 'globe' },
            { label: 'Bar Chart', value: 'bar-chart' },
            { label: 'Shield', value: 'shield' },
            { label: 'Package', value: 'package' },
            { label: 'Clipboard', value: 'clipboard' },
            { label: 'Settings', value: 'settings' },
            { label: 'Users', value: 'users' },
            { label: 'Database', value: 'database' },
            { label: 'Target', value: 'target' },
          ],
          defaultValue: 'box',
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
        },
        {
          name: 'bulletPoints',
          type: 'array',
          fields: [
            {
              name: 'color',
              type: 'select',
              required: true,
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Accent', value: 'accent' },
              ],
              defaultValue: 'accent',
            },
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Service Cards',
    singular: 'Service Cards',
  },
}
