import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  color?: 'white' | 'primary'
  logoHeight?: number
  logoWidth?: number
}

export const Logo = (props: Props) => {
  const {
    loading: loadingFromProps,
    priority: priorityFromProps,
    className,
    logoHeight,
    logoWidth,
    color,
  } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="ART Fulfillment Solutions Inc. Logo"
      width={logoWidth}
      height={logoHeight}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx(`max-w-[${logoWidth}px] max-h-[${logoHeight}px]`, className)}
      src={color === 'white' ? '/art-white-logo.png' : '/art-main-logo.png'}
    />
  )
}
