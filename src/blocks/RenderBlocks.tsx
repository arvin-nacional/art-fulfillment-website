import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { KeyHighlightsBlock } from '@/blocks/KeyHighlights/Component'
import { ServicesOverviewBlock } from '@/blocks/ServicesOverview/Component'
import { PageHeaderBlock } from '@/blocks/PageHeader/Component'
import { MissionSectionBlock } from '@/blocks/MissionSection/Component'
import { ValuesSectionBlock } from '@/blocks/ValuesSection/Component'
import { NumberedFeaturesBlock } from '@/blocks/NumberedFeatures/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/Component'
import { ServiceCardsBlock } from '@/blocks/ServiceCards/Component'
import { HeroBlockComponent } from '@/blocks/HeroBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  keyHighlights: KeyHighlightsBlock,
  servicesOverview: ServicesOverviewBlock,
  pageHeader: PageHeaderBlock,
  missionSection: MissionSectionBlock,
  valuesSection: ValuesSectionBlock,
  numberedFeatures: NumberedFeaturesBlock,
  contactSection: ContactSectionBlock,
  serviceCards: ServiceCardsBlock,
  heroBlock: HeroBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
