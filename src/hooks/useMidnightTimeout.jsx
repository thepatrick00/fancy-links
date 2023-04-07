// hook does not not work because people will not be waiting until although, unless they are?? I will keep it because this edge case where a person may actually be waiting for the next day at 12am.

// What I mean is that even if the day has compltly changed this function get cleaned up too before it can run in most cases
import React from 'react';

function useMidnightTimeout({callback}) {
  // I need to compare if the day changed for this to work
  React.useEffect(() => {
    console.log('useMidnightTimeout ran')
    // checks current time
    const now = new Date()

    // sets a time to execute the function at 12am
      // common edge case!! cleanup function will make this not work
    const night = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    )

    const msUntilMidnight = night.getTime() - now.getTime()

    const id = setTimeout(() => {
      callback()
      console.log('useMidnightTimeout async reset fn ran')
    }, msUntilMidnight)

    console.log({id})

    return () => {
      console.log('useMidnightTimeout cleanup fn ran')
      clearTimeout(id)
    }
  }, [])
}

export default useMidnightTimeout;
