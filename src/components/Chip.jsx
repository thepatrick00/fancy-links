import React from 'react'
import styles from './Chip.module.css'
import Tooltip from './Tooltip'

function GameBox({ title, description, link }) {
  // ill give it a nice gradient

  return (
    <div>
      <div className={styles.wrapper}></div>
      <p className={styles.title}>{title}</p>
      <Tooltip>{description}</Tooltip>
    </div>
  )
}

export default GameBox
