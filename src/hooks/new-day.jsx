import React from 'react'

function useIsDayChanged(callback) {
  const currentDay = new Date().getDate()
  const savedDay = JSON.parse(localStorage.getItem('day'))
  if (savedDay !== currentDay) {
    // if the day changed
    // then reset the total and all the counters
    // run the callback I passed in to do whatever you need to do
    // if the day has changed
    callback(event)
  }

  React.useEffect(() => {
    localStorage.setItem('day', JSON.stringify(new Date().getDate()))
  }, [])

  // return true if days are different
  return false
}

export default useIsDayChanged
