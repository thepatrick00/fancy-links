import React from 'react'
import styles from './LinkBox.module.css'

import FancyLink from './FancyLink'
import Tooltip from './Tooltip'
import ProgressBar from './ProgressBar'
// import { refresh-cw } from 'react-feather'
import { VscDebugRestart } from 'react-icons/vsc'
import styled from 'styled-components'
import { Counter } from './Counter'

let LINKS = [
  'https://www.swagbucks.com/g/l/p3btd7',
  'https://www.swagbucks.com/g/l/6vyye1',
  'https://www.swagbucks.com/g/l/xcq6yq',
  'https://www.swagbucks.com/g/l/1j26i4',
]

LINKS = [
  'https://www.example.com/',
  'https://www.example.com/',
  'https://www.example.com/',
  'https://www.example.com/',
]

const initialCounters = LINKS.map((link) => {
  return {
    link: link,
    count: 0,
    uniqueId: Math.random(),
  }
})

const savedTotal = JSON.parse(localStorage.getItem('total'))
const savedCounters = JSON.parse(localStorage.getItem('counters'))

function LinkBox({ className }) {
  const [total, setTotal] = React.useState(savedTotal || 0)
  const [counters, setCounters] = React.useState(
    savedCounters || initialCounters
  )

  const updateCounter = (uniqueId) => {
    const nextCounters = counters.map((link) => {
      // if the uniqueId that is passed in
      // matches the uniqueId we currently are looking for
      // in this .map(), then update this object.
      if (link.uniqueId === uniqueId) {
        return { ...link, count: link.count + 1 }
      } else {
        return link
      }
    })
    setCounters(nextCounters)
    setTotal(total + 1)
  }

  const handleReset = () => {
    setTotal(0)
    setCounters(initialCounters)
  }

  React.useEffect(() => {
    localStorage.setItem('total', JSON.stringify(total))
    localStorage.setItem('counters', JSON.stringify(counters))
  }, [total, counters])

  let info =
    total < 4 ? (
      <>
        <p className={styles.info}>
          <b>1st search win</b> Search each link once to get a search
          win
        </p>
        <Tooltip>
          It must be your first daily search since midnight
        </Tooltip>
      </>
    ) : (
      <>
        <p className={styles.info}>
          <b>2nd Search Win:</b> Search 4 links 8x + 1 to get your
          second search win. This is a total of 33 searches.
        </p>
        <Tooltip>
          Sometime it may take 40 search trys to get your second
          search win.
        </Tooltip>
      </>
    )

  const nextClass = `${styles.wrapper} ${className}`

  return (
    <main className={nextClass}>
      <h1 className={styles.h1}>Swagbucks Cheatsheet</h1>
      {info}

      <div className={styles.linksWrapper}>
        <div className={styles.clicks}>Clicks</div>
        {counters.map(({ link, count, uniqueId }) => {
          return (
            <FancyLink
              key={uniqueId}
              link={link}
              updateCounter={() => updateCounter(uniqueId)}
              count={count}
            />
          )
        })}
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
          <ResetIcon css={`grid-row: 2; grid-column: 2 `}/>
        </TotalGrid>

        <ProgressBar total={total} />
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

export default LinkBox
