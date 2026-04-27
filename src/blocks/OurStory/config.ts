import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const OurStory: Block = {
  slug: 'ourStory',
  interfaceName: 'OurStoryBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Our Story',
    },
    {
      name: 'tagline',
      type: 'textarea',
      defaultValue:
        'Great companies are built where experience meets real market needs. That is where ART began.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Statement Band Image',
      admin: {
        description: 'Image displayed beside the tagline and intro text.',
      },
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Intro Paragraph',
    },
    {
      name: 'founders',
      type: 'array',
      label: 'Founder Bios',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'letter',
          type: 'text',
          required: true,
          admin: {
            description: 'Single letter representing this founder (e.g. A, R, T)',
          },
        },
        {
          name: 'bio',
          type: 'richText',
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
      ],
    },
    {
      name: 'founderNote',
      type: 'richText',
      label: 'Founder Note',
      admin: {
        description:
          'Text displayed on the left side, below the founder cards, alongside the image carousel.',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'founderNoteCarousel',
      type: 'array',
      label: 'Founder Note Carousel Images',
      admin: {
        description: 'Images displayed in the carousel on the right side of the founder note.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          admin: {
            description: 'Optional caption shown below the image.',
          },
        },
      ],
    },
    {
      name: 'closingImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Closing Section Image',
      admin: {
        description: 'Image displayed on the left side of the closing paragraphs.',
      },
    },
    {
      name: 'closingParagraphs',
      type: 'array',
      label: 'Closing Paragraphs',
      fields: [
        {
          name: 'text',
          type: 'richText',
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
      ],
    },
  ],
  labels: {
    plural: 'Our Story Blocks',
    singular: 'Our Story Block',
  },
}
