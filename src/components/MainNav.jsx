import React from 'react'
import styles from './MainNav.module.css'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function MainNav({ className }) {
  // isActive is state inside of React Router NavLink
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : '',
      color: isActive ? 'var(--sky12)' : ''
    }
  }

  return (
    <nav
      css={`
        align-self: center;
      `}
    >
      <ul className={styles.nav__ul}>
        <ListItem className={''}>
          <NavLink to="/" style={activeStyle}>
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/swagbucks" style={activeStyle}>
            Swagbucks
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/microsoft" style={activeStyle}>
            Microsoft
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact" style={activeStyle}>
            Contact
          </NavLink>
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

  @media (max-width: 460px) {
    &:first-of-type {
      display: none;
    }
  }

  @media (max-width: 370px) {
    
  }
`

export default MainNav
