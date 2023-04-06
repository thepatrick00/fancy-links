import React from 'react'
import Page from './Page'
import { microsoftChipData } from './ChipData'
// import MicrosfotPage from './MicrosoftPage'
import MicrosoftLinkBox from './MicrosoftLinkBox'

function MicrosoftPage() {
  return (
    <Page
      slot={
        <>
          <MicrosoftLinkBox />
        </>
      }
      chipData={microsoftChipData}
    />
  )
}

export default MicrosoftPage
