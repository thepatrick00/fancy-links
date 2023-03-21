import React from 'react';
import styles from './MainNav.module.css'
import styled from 'styled-components'

function MainNav({className}) {
  const nextClass = `${styles.wrapper} ${className}`;

  return (
    <nav className={nextClass}>
      <ul className={styles.nav__ul}>
        <ListItem>
          <a href="Home">Home</a>
        </ListItem>
        <ListItem>
          <a href="Contact">Contact</a>
        </ListItem>
        <ListItem>
          <a href="Swagbucks">Swagbucks</a>
        </ListItem>
        <ListItem>
          <a href="Microsoft">Microsoft</a>
        </ListItem>
      </ul>
    </nav>
  )
}

const ListItem = styled.li`
  border-bottom: 3px solid var(--sky7);
  /* border-radius: 1rem; */
  padding: 0.5rem 1rem;
  /* background-color: var(--sky1); */

  &:focus {
    background-color: var(--sky2);
  }
  &:hover {
    background-color: var(--sky2);
    border-color: var(--sky8);
  }

  &:active {
    background-color: var(--sky3);
  }
`


export default MainNav;