import React from 'react'
import styles from './SwagbucksContent.module.css'

import FancyLink from './FancyLink'
import Tooltip from './Tooltip'
import MicrosoftProgressBar from './MicrosoftProgressBar'
// import { refresh-cw } from 'react-feather'
import { VscDebugRestart } from 'react-icons/vsc'
import styled from 'styled-components'
import { Counter } from './Counter'
import useMidnightTimeout from '../hooks/useMidnightTimeout'
import useDailyLocalStorageReset from '../hooks/useDailyLocalStorageReset'


// let LINKS = [
//   'https://www.bing.com/search?q=patricklimitless',
//   'https://www.bing.com/search?q=cannonsband',
//   'https://www.bing.com/search?q=swagbucks',
//   'https://www.bing.com/search?q=majorleaguesoccer',
//   // 'https://www.bing.com/search?q=example+domain',
// ]

// const initialCounters = LINKS.map((link) => {
//   return {
//     link: link,
//     count: 0,
//     uniqueId: Math.random(),
//   }
// })

function MicrosoftContent({ className }) {
  const [total, setTotal] = React.useState(0)
  // ctrl+f "setCounters", I am only using 1 link so I don't need this right now, but keeping it b/c I may need it. I use total for the single count I track.
  // const [counters, setCounters] = React.useState(initialCounters)

  useDailyLocalStorageReset('mday')

  const handleReset = () => {
    setTotal(0)
    // setCounters(initialCounters)
  }

  // I can make my own list of random search queries if this doesn't work
  // that will be quicker even since I won't need to fetch data
  const [word, setWord] = React.useState('thesaurus')

  React.useEffect(() => {
    setWord(searchRandomWord(false))
    // this fn increments total but I don't actually need to increment
    // for presetting the first word
    setTotal(0)
  }, [])

  // LocalStorage does not properly work with Strictmode on
  // due to the mulitple re-renders. Works properly without
  // strict-mode
  React.useEffect(() => {
    const savedTotal = JSON.parse(localStorage.getItem('mtotal'))
    // const savedCounters = JSON.parse(
    //   localStorage.getItem('mcounters')
    // )
    if (savedTotal) {
      setTotal(savedTotal)
    }
    // if (savedCounters) {
    //   setCounters(savedCounters)
    // }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('mtotal', JSON.stringify(total))
    // localStorage.setItem('mcounters', JSON.stringify(counters))
  }, [total])


  let info = (
    <>
      <p>
        Level 2 Account: Do 30 searches on your computer, and 20
        searches on your mobile phone to get all the points.
        <Tooltip>
          Requires 500 points to get to level 2. Level 1 accounts are
          limited to 10 searches or 50 points a day.
        </Tooltip>
      </p>
      <br />
      <p>
        If you earn the max of 270 points daily here is how much it is
        in dollars.
        <Tooltip>
          This is assuming you redeem the $5 Amazon Giftcard at 6500
          points and not counting any other bonuses.
        </Tooltip>
      </p>
      <ol>
        <li>$0.21 daily</li>
        <li>$1.45 weekly</li>
        <li>$6.23 monthly</li>
        <li>$75.80 yearly</li>
      </ol>
    </>
  )



  async function searchRandomWord(isIncrement = true) {
    try {
      const res = await fetch(
        'https://random-word-api.herokuapp.com/word'
      )
      const data = await res.json()
      isIncrement && setTotal(total + 1)

      setWord(data[0])
    } catch (err) {
      console.error('there was an error: ', err)
      return `error on click ${total}`
    }
  }

  const nextClass = `${styles.wrapper} ${className}`

  return (
    <main className={nextClass}>
      <h1 className={styles.h1}>
        Microsoft Rewards
        <br /> Easy Search
      </h1>
      {info}

      <div className={styles.linksWrapper}>
        <div className={styles.clicks}>Clicks</div>
        <FancyLink
          link={`https://www.bing.com/search?q=${word}`}
          onClick={searchRandomWord}
          count={total}
        >
          Search random word
        </FancyLink>
      </div>

      <InfoWrapper>
        <TotalGrid onClick={handleReset}>
          <p
            css={`
              grid-column: 1 / -1;
            `}
          >
            Total
          </p>
          <Counter>{total}</Counter>
          <ResetIcon
            css={`
              grid-row: 2;
              grid-column: 2;
            `}
          />
        </TotalGrid>

        <MicrosoftProgressBar total={total} />
      </InfoWrapper>
    </main>
  )
}

const InfoWrapper = styled.div`
  /* matches padding from FancyLink.module.css --padding value  */
  padding-left: 8px;
  font-weight: 500;
  display: grid;
  grid-template-columns: 200px 1fr;
`

const TotalGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 50px 1fr;
`

const ResetIcon = styled(VscDebugRestart)`
  font-size: 1.5rem;
  cursor: pointer;
  font-size: 40px;
  transition: 200ms;
  color: #e19b31;

  &:hover {
    scale: 1.1;
    transition: 200ms;
  }
`

export default MicrosoftContent
