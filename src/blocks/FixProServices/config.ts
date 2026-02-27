import { link } from '@/fields/link'
import type { Block } from 'payload'

export const FixProServices: Block = {
  slug: 'fixproServices',
  interfaceName: 'FixProServicesBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Current Solutions for Your Modern Problems',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Our Services',
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Service title (e.g., "Electric Repair")',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            description: 'Service type (e.g., "Service Type 1")',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Brief description of the service',
          },
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'pages',
          admin: {
            description: 'Optional link to service detail page',
          },
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Package', value: 'package' },
            { label: 'Warehouse', value: 'warehouse' },
            { label: 'Store', value: 'store' },
            { label: 'Snowflake', value: 'snowflake' },
            { label: 'Truck', value: 'truck' },
            { label: 'Box', value: 'box' },
            { label: 'Archive', value: 'archive' },
            { label: 'Clipboard', value: 'clipboard' },
            { label: 'ShoppingCart', value: 'shopping-cart' },
            { label: 'Package2', value: 'package-2' },
            { label: 'Building', value: 'building' },
            { label: 'Move', value: 'move' },
          ],
          defaultValue: 'package',
        },
      ],
      minRows: 1,
      maxRows: 6,
    },
    {
      name: 'showCTA',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Call-to-Action Button',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Explore All Services',
    },
    link({
      overrides: {
        name: 'ctaLink',
        label: 'CTA Link',
      },
    }),
  ],
  graphQL: {
    singularName: 'FixProServices',
  },
}
