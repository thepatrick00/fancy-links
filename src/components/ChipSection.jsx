import React from 'react'
import styles from './ChipSection.module.css'
import Chip from './Chip'
import chipData from './ChipData'

function ChipSection({ className }) {
  const nextClass = `${styles.wrapper} ${className}`

  return (
    <div className={nextClass}>
      {chipData.map(({key, ...delegated}) => {
        return (
          <Chip key={key} {...delegated}/>
        )
      })}
    </div>
  )
}

export default ChipSection
