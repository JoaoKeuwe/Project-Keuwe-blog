import React from 'react'
import { Link } from "react-router-dom"

function PostCard({ id, title, body }) {
  return (
    <main>
      <Link to={`/comments/${id}`}> <p>{id}</p></Link>
      <h2>{title}</h2>
      <p>{body}</p>
      <hr />
    </main>
  )
}

export default PostCard