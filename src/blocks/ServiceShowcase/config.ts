import type { Block } from 'payload'

export const ServiceShowcase: Block = {
  slug: 'serviceShowcase',
  interfaceName: 'ServiceShowcaseBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Complete Ecosystem',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'End-to-End Solutions',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Box', value: 'box' },
            { label: 'Zap (Lightning)', value: 'zap' },
            { label: 'Truck', value: 'truck' },
            { label: 'Ship (Freight)', value: 'ship' },
            { label: 'Globe', value: 'globe' },
            { label: 'Bar Chart', value: 'bar-chart' },
            { label: 'Shield', value: 'shield' },
            { label: 'Package', value: 'package' },
            { label: 'Clipboard', value: 'clipboard' },
            { label: 'Settings', value: 'settings' },
            { label: 'Users', value: 'users' },
            { label: 'Database', value: 'database' },
            { label: 'Target', value: 'target' },
            { label: 'Warehouse', value: 'warehouse' },
            { label: 'Map Pin', value: 'mappin' },
            { label: 'Snowflake', value: 'snowflake' },
            { label: 'Shopping Bag', value: 'store' },
          ],
          defaultValue: 'box',
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
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Service Image',
        },
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          defaultValue: 'auto',
          options: [
            { label: 'Auto (alternates)', value: 'auto' },
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Service Showcases',
    singular: 'Service Showcase',
  },
}
