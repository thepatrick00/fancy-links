import React from 'react'
import Tooltip from './Tooltip'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Chip({
  title,
  description,
  link,
  img,
  cardText,
  color,
  style,
}) {
  // if link start with a forward slash(/) use polymorphism
  // change Anchor to Link
  if (link[0] === '/') {
    return (
      <Link to={link} style={style}>
        <Card color={color}>{cardText}</Card>
        <Title color={color}>{title}</Title>
        {description && (
          <Tooltip style={{ position: 'absolute' }}>
            {description}
          </Tooltip>
        )}
      </Link>
    )
  }

  return (
    <Anchor href={link} target="_blank">
      <Card color={color}>{cardText}</Card>
      <Title color={color}>{title}</Title>
      {description && (
        <Tooltip style={{ position: 'absolute' }}>
          {description}
        </Tooltip>
      )}
    </Anchor>
  )
}

const Anchor = styled.a`
  height: min-content;
  text-align: center;
`

const Card = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 1rem;
  width: calc(150 / 16 * 1rem);
  margin: 0 auto;
  display: grid;
  place-content: center;
  color: var(--${(p) => p.color}11);
  font-size: 100%;
  background-color: var(--${({ color }) => color}3);
  background-image: linear-gradient(
    125deg,
    var(--${({ color }) => color}3),
    var(--slate2)
  );
  border: 1px solid var(--${({ color }) => color}7);

  &:hover {
    border-color: var(--${(p) => p.color}8);
    background-color: var(--${(p) => p.color}5);
  }

  &:active {
    background-color: var(--${(p) => p.color}5);
  }
`

const Title = styled.p`
  display: inline;
  color: var(--${(p) => p.color}11);
  text-align: center;
`

export default Chip
