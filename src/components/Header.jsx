import React from 'react'
// import logo from '../assets/logo.png'
import styles from './Header.module.css'
import MainNav from './MainNav'

function Header({className}) {

  const nextClass = `${styles.wrapper} ${className}`
  
  return (
    <header className={nextClass}>
      {/* <img src={logo} alt="logo" /> */}
      <h3>MoneyDecent</h3>
      <MainNav />
    </header>
  )
}

export default Header
