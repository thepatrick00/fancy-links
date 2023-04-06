import React from 'react'
import { BsShareFill } from 'react-icons/bs'
import styled from 'styled-components'

function ShareButton({ style }) {
  let shareData = {
    title: 'Faster Search Wins on Swagbucks & Microsoft Rewards',
    text: 'Check out MoneyDecent.com to maximize Swagbucks and Microsoft Rewards.',
    url: `${window.location.href}`,
  }

  const handleClick = async () => {
    try {
      if (navigator.canShare(shareData)) {
        await navigator.share(shareData)
      }
    } catch (err) {
      console.error('there was an error sharing: ', err)
    }
  }

  return (
    <>
      <Button onClick={handleClick} style={style}>
        Share
        <ShareIcon />
      </Button>
    </>
  )
}

const Button = styled.button`
  text-align: center;
  background-color: var(--grass3);
  border-color: var(--grass6);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: var(--grass4);
    border-color: var(--grass7);
  }
`

const ShareIcon = styled(BsShareFill)`
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  color: var(--slate12);
  font-size: 2rem;
  text-align: center;
`

export default ShareButton
