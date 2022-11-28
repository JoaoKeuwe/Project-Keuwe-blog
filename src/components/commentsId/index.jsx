import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Hero from '../hero'

function CommentsId() {
  const { id } = useParams()
  const [commentsId, setCommentsId] = useState([])

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
      <Hero />
      {commentsId.map((commentsId) => (
        <main>
          <h2>{commentsId.name}</h2>
          <p>{commentsId.body}</p>
          <hr />
        </main>
      ))}
    </div>
  )
}

export default CommentsId