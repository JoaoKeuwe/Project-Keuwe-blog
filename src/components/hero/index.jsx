import React from 'react'
import Logo from '../../images/logo.webp'
import styles from './style.module.css'

function Hero() {
  return (
    <header className={styles.header}>
      <nav>
        <img width={120} src={Logo} alt="Logo da empresa Btix" />
        <div className={styles.nav_options}>
        <a href='/'>Posts</a>
        <a href='/'>Users</a>
        </div>
      </nav>
      <h1 className={styles.header_title}>Blog Btix</h1>
    </header>
  )
}

export default Hero