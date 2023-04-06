import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import MainNav from './MainNav'
import ChipSection from './ChipSection'
import Footer from './Footer'
import ShareButton from './ShareButton'

function Page({ slot, chipData, children }) {

  const shareButtonStyle = {
    position: 'fixed',
    top: '20%',
    right: '-5px'
  }

  return (
    <>
      <Grid chipData={chipData}>
        <Logo />
        <MainNav />
        <Row row={2} column={2}>
          {slot || children}
        </Row>
        <Row row={2} column={3}>
          <ShareButton style={shareButtonStyle}/>
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
      chipData?.length
        ? '64px 2fr 1fr 100px'
        : '64px 2fr 100px'};
  grid-template-columns: 1fr 568px 1fr;
  grid-template-areas:
    'logo nav _'
    '_ main _'
    '_ chips _'
    '_ footer _';
`

const Row = styled.div`
  /* display: flex;
  justify-content: center; */
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`

export default Page
