import React from 'react'
import styles from './ProgressBar.module.css'
import ProgressBar from './ProgressBar'

function MicrosoftProgressBar({ total }) {
  const isMobile =
    navigator.userAgentData?.mobile ||
    window.matchMedia('(pointer:coarse)').matches
  let progressMax = isMobile ? 20 : 30
  let percentageToSearchWin = (total / progressMax) * 100

  if (total > progressMax) {
    percentageToSearchWin = 100
  }

  return (
    <div className={styles.wrapper}>
      <p style={{ textAlign: 'right' }}>
        {percentageToSearchWin === 100
          ? '100% | Congrats you are done with web searches 🎆'
          : `${percentageToSearchWin.toFixed(0)}
          % toward completion`}
      </p>
      <ProgressBar total={total} max={progressMax} />
    </div>
  )
}

export default MicrosoftProgressBar
