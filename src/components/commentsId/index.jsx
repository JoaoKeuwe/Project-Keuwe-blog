import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import * as S from './style'

export default function CommentsId() {
  const { id } = useParams()
  const [commentsId, setCommentsId] = useState([])

  // fazendo requisição à api de comentarios pelo id
  
  const state = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => {
        response.json()
          .then(data => {
            setCommentsId(data)
          });
      })
  }

  useEffect(() => {
    state()
  })

  return (
    <div>
      {commentsId.map((commentsId) => (
        <S.Comments>
          <h2><span class="material-symbols-outlined">
            account_circle
          </span> {commentsId.name}</h2>
          <p>{commentsId.body}</p>
          <hr />
        </S.Comments>
      ))}
    </div>
  )
}

