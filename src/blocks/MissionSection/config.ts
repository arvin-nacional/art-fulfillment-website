import type { Block } from 'payload'

export const MissionSection: Block = {
  slug: 'missionSection',
  interfaceName: 'MissionSectionBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Our Mission',
    },
    {
      name: 'paragraphs',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
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
          defaultValue: 'primary',
        },
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'select',
          required: true,
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Accent', value: 'accent' },
          ],
          defaultValue: 'primary',
        },
        {
          name: 'size',
          type: 'select',
          options: [
            { label: 'Large', value: 'large' },
            { label: 'Medium', value: 'medium' },
          ],
          defaultValue: 'large',
        },
      ],
    },
  ],
  labels: {
    plural: 'Mission Sections',
    singular: 'Mission Section',
  },
}
