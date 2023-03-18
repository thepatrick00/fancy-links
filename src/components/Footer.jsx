import React from 'react'
import styles from './Footer.module.css'

function Footer({ className }) {
  const nextClass = `${styles.wrapper} ${className}`
  return (
    <footer className={nextClass}>
      <div>
        <p>
          Made with {`<3`} by{' '}
          <a href="https://www.youtube.com/@PatrickLimitless/featured">
            Patrick Limitless
          </a>
        </p>
        <small>@MoneyDecent 2023. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
