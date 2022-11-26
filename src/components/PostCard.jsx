import React from 'react'

function PostCard({id, title, body}) {
  return (
    <div>
    <p>{id}</p>
    <h2>{title}</h2>
    <p>{body}</p>
    <hr />
  </div>
  )
}

export default PostCard