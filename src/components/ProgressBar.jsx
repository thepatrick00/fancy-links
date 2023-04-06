import React from 'react'
import * as Progress from '@radix-ui/react-progress'
import styles from './ProgressBar.module.css'
import styled from 'styled-components'

function ProgressBar({ total, max }) {
  let percentageToSearchWin = total / max
  
  return (
    <Progress.Root
      value={max}
      max={max}
      className={styles.root}
    >
      <Progress.Indicator
        className={styles.indicator}
        style={{
          width: percentageToSearchWin * 100 + '%',
        }}
      />
    </Progress.Root>
  )
}

export default ProgressBar
