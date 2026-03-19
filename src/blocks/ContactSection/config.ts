import type { Block } from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  interfaceName: 'ContactSectionBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Contact Information',
    },
    {
      name: 'contactItems',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Map Pin', value: 'MapPin' },
            { label: 'Phone', value: 'Phone' },
            { label: 'Mail', value: 'Mail' },
            { label: 'Clock', value: 'Clock' },
          ],
          defaultValue: 'MapPin',
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
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL (optional)',
        },
      ],
    },
    {
      name: 'showWhyContactUs',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show "Why Contact Us" Section',
    },
    {
      name: 'whyContactUsHeading',
      type: 'text',
      defaultValue: 'Why Contact Us?',
      admin: {
        condition: (data, siblingData) => siblingData?.showWhyContactUs,
      },
    },
    {
      name: 'whyContactUsItems',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.showWhyContactUs,
      },
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
      name: 'showScheduleMeeting',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show "Schedule a Meeting" Section',
    },
    {
      name: 'scheduleMeetingHeading',
      type: 'text',
      defaultValue: 'Schedule a Meeting',
      admin: {
        condition: (data, siblingData) => siblingData?.showScheduleMeeting,
      },
    },
    {
      name: 'scheduleMeetingDescription',
      type: 'textarea',
      defaultValue: 'Prefer a face-to-face conversation? Book a free consultation with our team.',
      admin: {
        condition: (data, siblingData) => siblingData?.showScheduleMeeting,
      },
    },
    {
      name: 'scheduleMeetingUrl',
      type: 'text',
      label: 'Meeting Link URL',
      defaultValue: 'https://calendar.app.google/A9oS4BP5NNFpwAto7',
      admin: {
        condition: (data, siblingData) => siblingData?.showScheduleMeeting,
      },
    },
    {
      name: 'formHeading',
      type: 'text',
      required: true,
      defaultValue: 'Send Us a Message',
    },
    {
      name: 'formDescription',
      type: 'textarea',
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'privacyText',
      type: 'text',
      defaultValue: 'By submitting this form, you agree to our Privacy Policy.',
    },
  ],
  labels: {
    plural: 'Contact Sections',
    singular: 'Contact Section',
  },
}
