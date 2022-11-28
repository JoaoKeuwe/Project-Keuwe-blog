import React from 'react'
import { Outlet } from 'react-router'
import { Hero } from '../../components/hero'
import * as S from './style'

function DefaultLayout() {
  return (
    <S.LayoutContainer>
    <Hero />
    <div className='wrapper'>
    <Outlet />
    </div>
    </S.LayoutContainer>
  )
}

export default DefaultLayout