import React from 'react'
import ImageHeader from '../images/imageHeader.jpg'
import Logo from '../images/logoBtix.png'

function Header() {
  return (
    <nav>
      <ul>
        <img width={100} src={Logo} alt="" />
        <li>Posts</li>
        <li>Users</li>
      </ul>
      <img width={400} src={ImageHeader} alt="" />
    </nav>
  )
}

export default Header