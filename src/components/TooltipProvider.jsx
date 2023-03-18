import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

function TooltipProvider({ children }) {
  return <Tooltip.Provider delayDuration={200}>{children}</Tooltip.Provider>
}

export default TooltipProvider
