import React from 'react'
import Page from './Page'
import { microsoftChipData } from './ChipData'
// import MicrosfotPage from './MicrosoftPage'
import MicrosoftContent from './MicrosoftContent'
import ScrollToTop from '../hooks/ScrollToTop'

function MicrosoftPage() {
  ScrollToTop()

  return (
    <Page chipData={microsoftChipData}>
      <MicrosoftContent />
    </Page>
  )
}

export default MicrosoftPage
