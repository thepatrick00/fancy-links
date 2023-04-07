// this function resets local storage when the day has changed

import React from 'react';

function useDailyLocalStorageReset(keyName, dep=[]) {
  
    React.useEffect(() => {
      // try to get item first, if does not exist will return null
      if (localStorage.getItem(keyName) === null) {
        // so set the item
        localStorage.setItem(
          keyName,
          JSON.stringify(new Date().getDate())
        )
      } else {
        // it exists, so compare the curr day with the day in localStorage
        const currDay = new Date().getDate()
        const savedDay = JSON.parse(localStorage.getItem(keyName))
        console.log({keyName, currDay, savedDay })

        if (currDay !== savedDay) {
          localStorage.clear()
          console.log('daily localStorage reset')
        }
      }
    }, [...dep])

}

export default useDailyLocalStorageReset;