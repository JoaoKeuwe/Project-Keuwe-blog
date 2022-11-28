import { React, useEffect, useState } from "react"

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
          <p>{comments.body}</p>
          <p>{comments.name}</p>
        </main>
      ))}
    </div>
  )
}

export default Comments