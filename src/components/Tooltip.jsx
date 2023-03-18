import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import styles from './Tooltip.module.css'

function Tooltip({ children }) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger className={styles.trigger}>
        *
      </RadixTooltip.Trigger>
      <RadixTooltip.Content className={styles.content}>
        <RadixTooltip.Arrow />
        {children}
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  )
}

export default Tooltip
