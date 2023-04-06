import React from 'react'
import styles from './ChipSection.module.css'
import Chip from './Chip'

function ChipSection({ className, chipData = [] }) {
  const nextClass = `${styles.wrapper} ${className}`

  if(chipData.length === 0) {
    return null;
  }

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
