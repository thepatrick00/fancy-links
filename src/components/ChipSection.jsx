import React from 'react'
import styles from './ChipSection.module.css'
import Chip from './Chip'
import chipData from './ChipData'

function ChipSection({ className }) {
  const nextClass = `${styles.wrapper} ${className}`

  return (
    <div className={nextClass}>
      {chipData.map(({ title: t, description: d }, index) => {
        return <Chip key={index} title={t} description={d} />
      })}
    </div>
  )
}

export default ChipSection
