import type { Block } from 'payload'
import { link } from '@/fields/link'
export const SolutionJourney: Block = {
  slug: 'solutionJourney',
  interfaceName: 'SolutionJourneyBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Your End-to-End Fulfillment Journey',
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
        'Whether you are just starting out or scaling operations, we have the right solution for every stage of your journey.',
    },
    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'select',
          defaultValue: 'globe',
          options: [
            { label: 'Globe (Market Entry)', value: 'globe' },
            { label: 'Truck (Freight)', value: 'truck' },
            { label: 'Shield (Compliance)', value: 'shield' },
            { label: 'Store (Storefront)', value: 'store' },
            { label: 'Warehouse (Inventory)', value: 'warehouse' },
            { label: 'Package (Fulfillment)', value: 'package' },
            { label: 'Map Pin (Last Mile)', value: 'mappin' },
            { label: 'Snowflake (Cold Chain)', value: 'snowflake' },
          ],
        },
      ],
      minRows: 2,
      maxRows: 12,
      defaultValue: [
        {
          title: 'Market Entry Support',
          description:
            'Navigate new markets with expert guidance on strategy and local requirements.',
          icon: 'globe',
        },
        {
          title: 'Freight Services',
          description: 'Reliable inbound and outbound freight solutions for your cargo needs.',
          icon: 'truck',
        },
        {
          title: 'Compliance & Licensing',
          description: 'Stay fully compliant with regulatory requirements and market standards.',
          icon: 'shield',
        },
        {
          title: 'Storefront Enablement',
          description: 'Set up and optimize your online stores across major marketplaces.',
          icon: 'store',
        },
        {
          title: 'Inventory Management',
          description: 'Real-time tracking and smart inventory control to prevent stockouts.',
          icon: 'warehouse',
        },
        {
          title: 'Fulfillment Services',
          description: 'Accurate and fast order processing from pick to pack to ship.',
          icon: 'package',
        },
        {
          title: 'Last-Mile Delivery',
          description:
            'Reliable custom courier services ensuring timely delivery to your customers.',
          icon: 'mappin',
        },
        {
          title: 'Cold Chain Solutions',
          description: 'Temperature-controlled logistics for sensitive and perishable goods.',
          icon: 'snowflake',
        },
      ],
    },
    {
      name: 'showCTA',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Call-to-Action Button',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Explore All Services',
    },
    link({
      overrides: {
        name: 'ctaLink',
        label: 'CTA Link',
      },
    }),
  ],
  graphQL: {
    singularName: 'SolutionJourney',
  },
}
