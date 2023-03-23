import React from 'react'
import styles from './FancyLink.module.css'

function FancyLink({ link, updateCounter, count }) {
  // const savedCounter = JSON.parse(
  //   localStorage.getItem(`counter ${index}`)
  // )
  
  // React.useEffect(() => {
  //   localStorage.setItem(
  //     `counter ${index}`,
  //     JSON.stringify(counter)
  //   )
  // }, [counter])

  return (
    <a
      className={styles.wrapper}
      onClick={updateCounter}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.counter}>{count}</div>
      <p className={styles.url}>{link}</p>
    </a>
  )
}

export default FancyLink
