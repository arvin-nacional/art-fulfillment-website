import type { Block } from 'payload'

export const AcronymValues: Block = {
  slug: 'acronymValues',
  interfaceName: 'AcronymValuesBlock',
  labels: {
    plural: 'Acronym Values',
    singular: 'Acronym Values',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
    },
    {
      name: 'values',
      type: 'array',
      label: 'Values',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'letter',
          type: 'text',
          required: true,
          label: 'Letter (e.g., "A")',
          admin: {
            description: 'Single character representing this value in the acronym',
          },
        },
        {
          name: 'word',
          type: 'text',
          required: true,
          label: 'Value Word (e.g., "Accountability")',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
      ],
    },
  ],
}
