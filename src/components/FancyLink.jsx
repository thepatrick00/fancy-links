import React from 'react'
import styles from './FancyLink.module.css'

function FancyLink({ url, setTotal, index }) {
  const savedCounter = JSON.parse(
    localStorage.getItem(`counter ${index}`)
  )

  const [counter, setCounter] = React.useState(savedCounter || 0)

  const handleClick = () => {
    setCounter(counter + 1)
    setTotal(curr => curr + 1)
  }

  
  React.useEffect(() => {
    localStorage.setItem(
      `counter ${index}`,
      JSON.stringify(counter)
    )

    // This cleanup function is used for debugging purpose only
    // return () => {
    //   localStorage.removeItem(`counter ${index}`)
    // }
  }, [counter])

  // also open links in new tab by default

  return (
    <a
      className={styles.wrapper}
      onClick={handleClick}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.counter}>{counter}</div>
      <p className={styles.url}>{url}</p>
    </a>
  )
}

export default FancyLink
