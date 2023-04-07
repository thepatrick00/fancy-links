import React from 'react'
import { BsShareFill } from 'react-icons/bs'
import styled from 'styled-components'

function ShareButton({ style }) {
  const [message, setMessage] = React.useState(null)

  let shareData = {
    title: 'Faster Search Wins on Swagbucks & Microsoft Rewards',
    text: 'Check out MoneyDecent.com to maximize Swagbucks and Microsoft Rewards.',
    url: `${window.location.href}`,
  }

  const handleClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback since only 67% browsers support Web Share API
        // Get the current URL
        const currentUrl = window.location.href

        // Copy the URL to the clipboard
        navigator.clipboard
          .writeText(currentUrl)
          .then(() => {
            setMessage('URL copied to clipboard')
            setTimeout(() => {
              setMessage(null)
            }, 3000)
          })
          .catch((err) => {
            console.error('Failed to copy URL: ', err)
          })
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
      {message && (
        <div
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            padding: '10px',
            backgroundColor: 'var(--grass10)',
            color: 'white',
          }}
        >
          {message}
        </div>
      )}
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
