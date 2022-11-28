import React from 'react'
import { Link } from "react-router-dom"

function PostCard({ id, title, body }) {
  return (
    <main>
      <Link to={`/comments/${id}`}>
        <h2>{title}</h2>
        <p>{body}</p>
      </Link>
      <hr />
    </main>
  )
}

export default PostCard