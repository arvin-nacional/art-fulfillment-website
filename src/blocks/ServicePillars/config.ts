import type { Block } from 'payload'

export const ServicePillars: Block = {
  slug: 'servicePillars',
  interfaceName: 'ServicePillarsBlock',
  labels: {
    plural: 'Service Pillars',
    singular: 'Service Pillars',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Section Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
    },
    {
      name: 'pillars',
      type: 'array',
      label: 'Service Pillars',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Pillar Title',
        },
        {
          name: 'acronym',
          type: 'text',
          label: 'Acronym (e.g., FBA)',
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline (e.g., Outsource Everything)',
          admin: {
            description: 'Short colored tagline shown next to the acronym badge',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Brief Description',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          minRows: 1,
          maxRows: 6,
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
              label: 'Feature',
              admin: {
                description:
                  'Use **text** to bold important words (e.g., "Store products **safely** in our facility")',
              },
            },
          ],
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Warehouse', value: 'warehouse' },
            { label: 'Truck', value: 'truck' },
            { label: 'Settings', value: 'settings' },
            { label: 'Chart', value: 'chart' },
            { label: 'Package', value: 'package' },
            { label: 'Shield', value: 'shield' },
          ],
          defaultValue: 'package',
        },
      ],
      admin: {
        initCollapsed: false,
      },
    },
  ],
}
