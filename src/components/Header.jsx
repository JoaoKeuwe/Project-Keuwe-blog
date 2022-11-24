import React from 'react'
import Logo from '../images/logoBtix.png'

function Header() {
  return (
    <nav>
      <img width={150} src={Logo} alt="Logo da empresa Btix" />
      <ul>
        <li>Home</li>
      </ul>
    </nav>
  )
}

export default Header