import React from 'react'

function PostCard({id, title, body}) {
  return (
    <main>
    <p>{id}</p>
    <h2>{title}</h2>
    <p>{body}</p>
    <hr />
  </main>
  )
}

export default PostCard