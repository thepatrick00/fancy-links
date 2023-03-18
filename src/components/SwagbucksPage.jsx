import React from 'react'
import styles from './SwagbucksPage.module.css'
import LinkBox from './LinkBox'
import Footer from './Footer'
import MainNav from './MainNav'
import ChipSection from './ChipSection'


function SwagbucksPage() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.logo}>MoneyDecent<span>.com</span></h3>
      <MainNav className={styles.mainnav}/>
      <LinkBox className={styles.linkbox}/>
      <ChipSection className={styles.chipsection}/>
      <Footer className={styles.footer}/>
    </div>
  )
}

export default SwagbucksPage
