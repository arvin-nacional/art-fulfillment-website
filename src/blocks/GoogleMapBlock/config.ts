import type { Block } from 'payload'

export const GoogleMapBlock: Block = {
  slug: 'googleMapBlock',
  interfaceName: 'GoogleMapBlock',
  fields: [
    {
      name: 'embedUrl',
      type: 'text',
      required: true,
      label: 'Google Maps Embed URL',
      admin: {
        description:
          'Go to Google Maps → Share → Embed a map → Copy the src URL from the iframe code',
      },
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 450,
      label: 'Map Height (px)',
      admin: {
        description: 'Height of the map in pixels',
      },
    },
    {
      name: 'fullWidth',
      type: 'checkbox',
      defaultValue: true,
      label: 'Full Width',
    },
  ],
  labels: {
    plural: 'Google Map Blocks',
    singular: 'Google Map Block',
  },
}
