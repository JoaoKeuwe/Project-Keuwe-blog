import React from 'react'
import Logo from '../../images/logo.webp'
import * as S from './style'

function Hero() {
  return (
    <S.HeaderHero>
      <S.NavMenu>
        <img width={120} src={Logo} alt="Logo da empresa Btix" />
        <S.NavOptions>
          <a href='/'>Posts</a>
          <a href='/'>Users</a>
        </S.NavOptions>
      </S.NavMenu>
      <h1>Blog Btix</h1>
    </S.HeaderHero>
  )
}

export default Hero