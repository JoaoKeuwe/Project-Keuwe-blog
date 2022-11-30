import React from 'react'
import { Outlet } from 'react-router'
import { Hero } from '../../components/hero'
import { Posts } from '../../pages/home/components/posts'
import * as S from './style'

export default function DefaultLayout() {
  // usando práticas de mercado para estilizar os Posts, usando styled components
  return (
    <S.LayoutContainer>
    <Hero />
    <div className='wrapper'>
    <Outlet />
    </div>
    </S.LayoutContainer>
  )
}

