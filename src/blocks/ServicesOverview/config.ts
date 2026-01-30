import type { Block } from 'payload'
import { link } from '@/fields/link'

export const ServicesOverview: Block = {
  slug: 'servicesOverview',
  interfaceName: 'ServicesOverviewBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Our Complete Ecosystem',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'End-to-end fulfillment solutions tailored for your business',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 8,
      fields: [
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
  labels: {
    plural: 'Services Overviews',
    singular: 'Services Overview',
  },
}
