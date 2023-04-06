import React from 'react'
import styles from './ProgressBar.module.css'
import ProgressBar from './ProgressBar'

function SwagbucksProgressBar({ total }) {
  let progressMax = 4
  let percentageToSearchWin = (total / progressMax) * 100
  if (total > 4) {
    progressMax = 33 + 4
    percentageToSearchWin = total / progressMax * 100
  }

  if (total > progressMax) {
    percentageToSearchWin = 100
  }

  return (
    <div className={styles.wrapper}>
      <p style={{ textAlign: 'right' }}>
        {percentageToSearchWin === 100
          ? '100% | Check for a search win'
          : ''}{' '}
        {percentageToSearchWin !== 100 &&
          `${percentageToSearchWin.toFixed(
            0
          )}% progress toward search win`}
      </p>
      <ProgressBar total={total} max={progressMax} />
      {/* <Progress.Root
        value={total > progressMax ? progressMax : total}
        max={progressMax}
        className={styles.root}
      >
        <Progress.Indicator
          className={styles.indicator}
          style={{
            width: percentageToSearchWin + '%',
          }}
        />
      </Progress.Root> */}
    </div>
  )
}

export default SwagbucksProgressBar
