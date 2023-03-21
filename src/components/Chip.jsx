import React from 'react'
import styles from './Chip.module.css'
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
      <p className={styles.title}>{title}</p>
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
  color: white;
  font-size: 2rem;
  background-color: var(--slate7);
  border: 1px solid var(--slate8);

  &:before {
    /* content: '${props => props.payout}';
    display: absolute;
    color: black; */
    
  }
`

export default Chip
