import React from 'react'
import Tooltip from './Tooltip'
import styled from 'styled-components'

function Chip({ title, description, link, img, payout }) {
  // ill give it a nice gradient

  // how would I put an image prop when I need to use css
  // one solution I see is styled components
  console.log(payout)

  return (
    <a href={link}>
      <Card payout={payout}>{payout}</Card>
      <p style={{display: 'inline'}}>{title}</p>
      <Tooltip>{description}</Tooltip>
    </a>
  )
}

const Card = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  width: calc(150/16 * 1rem);
  display: grid;
  place-content: center;
  color: var(--slate11);
  font-size: 2rem;
  background-color: var(--indigo3);
  border: 1px solid var(--indigo7);

  &:hover {
    border-color: var(--indigo8);
    background-color: var(--indigo4);
  }

  &:active {
    background-color: var(--indigo5);
  }

  &:before {
    /* content: '${props => props.payout}';
    display: absolute;
    color: black; */
    
  }
`

export default Chip
