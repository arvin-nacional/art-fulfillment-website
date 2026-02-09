import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Trusted by Industry Leaders',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue:
        'Join hundreds of businesses scaling their operations with ART Fulfillment Solutions.',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 12,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'initials',
          type: 'text',
          required: true,
          maxLength: 3,
        },
        {
          name: 'bgColor',
          type: 'select',
          required: true,
          options: [
            { label: 'Blue', value: 'bg-blue-100' },
            { label: 'Purple', value: 'bg-purple-100' },
            { label: 'Pink', value: 'bg-pink-100' },
            { label: 'Green', value: 'bg-green-100' },
            { label: 'Yellow', value: 'bg-yellow-100' },
            { label: 'Indigo', value: 'bg-indigo-100' },
            { label: 'Teal', value: 'bg-teal-100' },
            { label: 'Orange', value: 'bg-orange-100' },
            { label: 'Red', value: 'bg-red-100' },
            { label: 'Cyan', value: 'bg-cyan-100' },
          ],
          defaultValue: 'bg-blue-100',
        },
      ],
    },
  ],
  labels: {
    plural: 'Testimonials',
    singular: 'Testimonials',
  },
}
