import React from 'react'
import * as Progress from '@radix-ui/react-progress'
import styles from './ProgressBar.module.css'

function ProgressBar({ total }) {
  // used to determine 1st win and second win
  let progressMax = 4
  let percentageToSearchWin = (total / progressMax) * 100;
  if(total > 4) {
    progressMax = 33;
    percentageToSearchWin = (total - 4) / progressMax * 100;
  }

  return (
    <div className={styles.wrapper}>
      <p>
        {percentageToSearchWin === 100
          ? '100% | Check for a search win'
          : ''}{' '}
        {percentageToSearchWin !== 100 &&
          `${percentageToSearchWin.toFixed(0)}% progress toward search win`}
      </p>
      <Progress.Root
        value={total}
        max={progressMax}
        className={styles.root}
      >
        <Progress.Indicator
          className={styles.indicator}
          style={{
            width: percentageToSearchWin + '%',
          }}
        />
      </Progress.Root>
    </div>
  )
}

export default ProgressBar
