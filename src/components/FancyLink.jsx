import React from 'react'
import styles from './FancyLink.module.css'
import { Counter } from './Counter'

function FancyLink({ link, onClick, count = 0, children }) {

  return (
    <a
      className={styles.wrapper}
      onClick={onClick}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <Counter>{count}</Counter>
      <p className={styles.url}>{children || link}</p>
    </a>
  )
}

export default FancyLink
