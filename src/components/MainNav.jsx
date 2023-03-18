import React from 'react';
import styles from './MainNav.module.css'

function MainNav({className}) {
  const nextClass = `${styles.wrapper} ${className}`;

  return (
    <nav className={nextClass}>
      <ul className={styles.nav__ul}>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Contact">Contact</a>
        </li>
        <li>
          <a href="Swagbucks">Swagbucks</a>
        </li>
        <li>
          <a href="Microsoft">Microsoft</a>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;