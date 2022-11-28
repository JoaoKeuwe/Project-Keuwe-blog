import React from 'react'
import { useEffect, useState } from "react"

function Comments() {
  const [comments, setComments] = useState([])

  const fetch_url = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data)
      })
  }

  useEffect(() => {
    fetch_url()
  }, [])

  return (
    <div>
      {comments.map((comments) => (
        <main>
          <p>{comments.id}</p>
          <br />
           <p> {comments.name}</p>
          <p>{comments.body}</p>
          <br />
        </main>
      ))}</div>
  )
}

export default Comments