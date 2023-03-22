import React from 'react'
import Tooltip from './Tooltip'
import styled from 'styled-components'

function Chip({ title, description, link, img, payout, color }) {
  // ill give it a nice gradient

  // how would I put an image prop when I need to use css
  // one solution I see is styled components
  console.log(payout)

  return (
    <a href={link}>
      <Card payout={payout} color={color}>{payout}</Card>
      <Title color={color}>{title}</Title>
      <Tooltip>{description}</Tooltip>
    </a>
  )
}

const Card = styled.div`
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  width: calc(150 / 16 * 1rem);
  position: relative;
  display: grid;
  place-content: center;
  color: var(--${(p) => p.color}11);
  font-size: 2rem;
  background-color: var(--${(p) => p.color}3);
  border: 1px solid var(--${(p) => p.color}7);

  &:hover {
    border-color: var(--${(p) => p.color}8);
    background-color: var(--${(p) => p.color}4);
  }

  &:active {
    background-color: var(--${(p) => p.color}5);
  }

`

const Title = styled.p`
  display: inline;
  color: var(--${p=>p.color}11);
`

export default Chip
