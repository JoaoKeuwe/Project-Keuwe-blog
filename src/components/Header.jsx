import React from 'react'
import ImageHeader from '../images/imageHeader.jpg'
import Logo from '../images/logoBtix.png'

function Header() {
  return (
    <nav>
      <ul>
        <img width={100} src={Logo} alt="Logo da empresa Btix" />
        <li>Posts</li>
        <li>Users</li>
      </ul>
      <img width={400} src={ImageHeader} alt="Logo do header" />
      <figcaption>Blog Btix</figcaption>
    </nav>
  )
}

export default Header