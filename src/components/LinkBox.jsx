import React from 'react'
import styles from './LinkBox.module.css'

import FancyLink from './FancyLink'
import Tooltip from './Tooltip'
import ProgressBar from './ProgressBar'

const LINKS = [
  'https://www.swagbucks.com/g/l/p3btd7',
  'https://www.swagbucks.com/g/l/6vyye1',
  'https://www.swagbucks.com/g/l/xcq6yq',
  'https://www.swagbucks.com/g/l/1j26i4',
]

// const LINKS = [
//   'https://www.example.com/',
//   'https://www.example.com/',
//   'https://www.example.com/',
//   'https://www.example.com/',
// ]

const savedTotal = JSON.parse(localStorage.getItem('total'))

function LinkBox({className}) {
  const [total, setTotal] = React.useState(savedTotal || 0)

  React.useEffect(() => {
    // When total changes, put it in localStorage
    localStorage.setItem('total', JSON.stringify(total))
  }, [total])

  let info =
    total < 4 ? (
      <>
        <p className={styles.info}>
          <b>1st search win</b> Search each link once to get a search win
        </p>
        <Tooltip>
          It must be your first daily search since midnight
        </Tooltip>
      </>
    ) : (
      <>
        <p className={styles.info}>
          <b>2nd Search Win:</b> Search 4 links 8x + 1 
          to get your second search win. This is a total of 33 searches.
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
        {LINKS.map((link, i) => {
          return (
            <FancyLink
              key={i}
              index={i}
              url={link}
              setTotal={setTotal}
            />
          )
        })}
      </div>

      <div className={styles.totalWrapper}>
        <div>
          Total
          <div className={styles.totalBox}>{total}</div>
        </div>
        <ProgressBar total={total} />
      </div>
    </main>
  )
}

export default LinkBox
