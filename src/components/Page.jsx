import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import MainNav from './MainNav'
import ChipSection from './ChipSection'
import Footer from './Footer'
import ShareButton from './ShareButton'
import { BREAKPOINTS } from './data'

function Page({ slot, chipData, children }) {
  // let shareButtonStyle = {
  //   position: 'fixed',
  //   top: '20%',
  //   right: '-3px',
  // }

  return (
    <>
      <Grid chipData={chipData}>
        <StyledLogo />
        <MainNav />
        <Row row={2} column={2}>
          {slot || children}
        </Row>
        <Row row={2} column={3}>
          <ShareButton />
        </Row>
        <ChipSection
          chipData={chipData}
          css={`
            grid-row: 3;
            grid-column: 2;
          `}
        />
        <Row row={chipData?.length ? 4 : 3} column={2}>
          <Footer />
        </Row>
      </Grid>
    </>
  )
}

export const Grid = styled.div`
  display: grid;
  grid-template-rows: ${({ chipData }) =>
    chipData?.length ? '64px 2fr 1fr 100px' : '64px 2fr 100px'};
  grid-template-columns: 1fr 568px 1fr;
  grid-template-areas:
    'logo nav _'
    '_ main _'
    '_ chips _'
    '_ footer _';

  @media (max-width: 1024px) {
    display: block;
    max-width: 575px;
    padding: 1rem;
    margin: auto;
  }
`
const StyledLogo = styled(Logo)`
  @media (max-width: 1024px) {
    display: none;
  }
`

const Row = styled.div`
  /* display: flex;
  justify-content: center; */
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`

export default Page
