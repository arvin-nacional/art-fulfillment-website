import type { Block } from 'payload'

export const PageHeader: Block = {
  slug: 'pageHeader',
  interfaceName: 'PageHeaderBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional background image for the page header',
      },
    },
  ],
  labels: {
    plural: 'Page Headers',
    singular: 'Page Header',
  },
}
