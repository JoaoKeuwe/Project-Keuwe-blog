import React from 'react'
import { Link } from "react-router-dom"
import * as S from './style'

export default function PostCard({ id, title, body }) {
  return (
    <S.PostContainer>
      <Link to={`/comments/${id}`} className='PostLink'>
        <h2>{title}</h2>
        <p>{body}</p>
      </Link>
      <hr />
    </S.PostContainer>
  )
}
