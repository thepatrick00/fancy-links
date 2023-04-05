import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import MainNav from './MainNav'
import LinkBox from './LinkBox'
import ChipSection from './ChipSection'
import Footer from './Footer'

function SwagbucksPage() {
  return (
    <Grid>
      <Logo />
      <MainNav
        css={`
          grid-area: nav;
          align-self: center;
        `}
      />
      <LinkBox
        css={`
          grid-row: 2 / 3;
          grid-column: 1 / -1;
        `}
      />
      <ChipSection
        css={`
          grid-row: 3;
          grid-column: 2;
        `}
      />
      <Row row={4} column={2}>
        <Footer />
      </Row>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 64px 2fr 1fr 100px;
  grid-template-columns: 1fr 568px 1fr;
  grid-template-areas:
    'logo nav _'
    '_ main _'
    '_ chips _'
    '_ footer _';
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
`

export default SwagbucksPage
