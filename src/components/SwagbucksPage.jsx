import React from 'react'
import styled from 'styled-components'

import SwagbucksContent from './SwagbucksContent'
import Page from './Page'

import {swagbucksChipData} from './ChipData'

function SwagbucksPage() {
  return (
    <Page chipData={swagbucksChipData}>
      <SwagbucksContent />
    </Page>
  )
}

export default SwagbucksPage
