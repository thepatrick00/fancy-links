import React from 'react'
import styled from 'styled-components'

import LinkBox from './LinkBox'
import Page from './Page'

import {swagbucksChipData} from './ChipData'

function SwagbucksPage({ slot }) {
  return (
    <Page slot={<LinkBox />} chipData={swagbucksChipData}/>
  )
}

export default SwagbucksPage
