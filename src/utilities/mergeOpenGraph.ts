import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Scale your e-commerce business across the Philippines and ASEAN with seamless, tech-enabled fulfillment solutions.',
  images: [
    {
      url: `${getServerSideURL()}/og-image.webp`,
    },
  ],
  siteName: 'ART Fulfillment Solutions',
  title: 'ART Fulfillment Solutions',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
