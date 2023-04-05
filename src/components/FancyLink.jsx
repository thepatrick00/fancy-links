import React from 'react'
import styles from './FancyLink.module.css'
import { Counter } from './Counter'

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
      <Counter>{count}</Counter>
      <p className={styles.url}>{link}</p>
    </a>
  )
}

export default FancyLink
