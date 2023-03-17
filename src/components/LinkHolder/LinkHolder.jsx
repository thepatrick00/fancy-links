import React from 'react'
import FancyLink from '../FancyLink/FancyLink'
import styles from './LinkHolder.module.css'

const LINKS = [
  'https://www.swagbucks.com/g/l/p3btd7',
  'https://www.swagbucks.com/g/l/6vyye1',
  'https://www.swagbucks.com/g/l/xcq6yq',
  'https://www.swagbucks.com/g/l/1j26i4',
]

const savedTotal = JSON.parse(localStorage.getItem('total'));

function LinkHolder() {
  const [total, setTotal] = React.useState(savedTotal || 0)

  React.useEffect(() => {
    // When total changes, put it in localStorage
    localStorage.setItem('total', JSON.stringify(total))
  }, [total])

  return (
    <main>
      <h1>Swagbucks Cheatsheet</h1>
      {total > 4 && (
        <p>
          2nd Search Win: Search the 4 links 8 times, +1 more time for a total of 33 searches. This is how you get your second search win.
        </p>
      )}
      {total <= 4 && <p>First search win on 4th link</p>}
      <div className={styles.wrapper}>
        <div className={styles.clicksTitle}>Clicks</div>
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
      <div>Total: {total}</div>
    </main>
  )
}

export default LinkHolder
