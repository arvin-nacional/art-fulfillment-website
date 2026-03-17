import type { Block } from 'payload'

export const ServiceQuickNav: Block = {
  slug: 'serviceQuickNav',
  interfaceName: 'ServiceQuickNavBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Explore Our Services',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Our Solutions',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Select a service below to learn more. Whether you are just starting or scaling, we cover every stage.',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          defaultValue: 'globe',
          options: [
            { label: 'Globe (Market Entry)', value: 'globe' },
            { label: 'Truck (Freight)', value: 'truck' },
            { label: 'Ship (Freight)', value: 'ship' },
            { label: 'Shield (Compliance)', value: 'shield' },
            { label: 'Store (Storefront)', value: 'store' },
            { label: 'Warehouse (Inventory)', value: 'warehouse' },
            { label: 'Package (Fulfillment)', value: 'package' },
            { label: 'Map Pin (Last Mile)', value: 'mappin' },
            { label: 'Snowflake (Cold Chain)', value: 'snowflake' },
            { label: 'Box', value: 'box' },
            { label: 'Zap', value: 'zap' },
            { label: 'Bar Chart', value: 'bar-chart' },
            { label: 'Shield', value: 'shield' },
            { label: 'Clipboard', value: 'clipboard' },
            { label: 'Users', value: 'users' },
            { label: 'Target', value: 'target' },
          ],
        },
        {
          name: 'targetIndex',
          type: 'number',
          label: 'Target Service Index (0-based)',
          admin: {
            description:
              'The index of the service in the ServiceShowcase block to scroll to (0 = first)',
          },
        },
      ],
      defaultValue: [
        { title: 'Market Entry Support', icon: 'globe', targetIndex: 0 },
        { title: 'Freight Services', icon: 'ship', targetIndex: 1 },
        { title: 'Compliance & Licensing', icon: 'shield', targetIndex: 2 },
        { title: 'Storefront Enablement', icon: 'store', targetIndex: 3 },
        { title: 'Inventory Management', icon: 'warehouse', targetIndex: 4 },
        { title: 'Fulfillment Services', icon: 'package', targetIndex: 5 },
        { title: 'Last-Mile Delivery', icon: 'mappin', targetIndex: 6 },
        { title: 'Cold Chain Solutions', icon: 'snowflake', targetIndex: 7 },
      ],
    },
  ],
  labels: {
    plural: 'Service Quick Navs',
    singular: 'Service Quick Nav',
  },
}
