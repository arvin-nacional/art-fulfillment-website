import type { Block } from 'payload'

export const GoogleMapBlock: Block = {
  slug: 'googleMapBlock',
  interfaceName: 'GoogleMapBlock',
  fields: [
    {
      name: 'locations',
      type: 'array',
      label: 'Locations',
      admin: {
        description:
          'Add one or more locations. Multiple locations are displayed side by side on desktop.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Location Title',
          admin: {
            description: 'Optional — shown above the map (e.g. "Head Office")',
          },
        },
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
      ],
    },
    {
      name: 'embedUrl',
      type: 'text',
      label: 'Google Maps Embed URL (legacy)',
      admin: {
        description: 'Deprecated — use the Locations field above instead.',
        condition: (_, siblingData) =>
          !Array.isArray(siblingData?.locations) || siblingData.locations.length === 0,
      },
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 450,
      label: 'Map Height (px)',
      admin: {
        description: 'Height of each map in pixels',
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
