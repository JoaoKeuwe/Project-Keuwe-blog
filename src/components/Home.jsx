import React from 'react'
import { useEffect, useState } from "react"
import PostCard from '../components/PostCard';

function Home() {
  const [pagination, setPagination] = useState({ page: 1, content: [] })
  const [, setPostComments] = useState([])
  const [repositories, setRepositories] = useState()
  const [handleRepositories] = useState()

  // Evitando erro de magic number e criando variaveis com os numeros 
  const INITAL_POSTS = 0
  const FINAL_POSTS = 10

  const state = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setPagination({ page: 1, content: data.slice(INITAL_POSTS, FINAL_POSTS) })
      })
  }

  useEffect(() => {
    state()
  }, [])

  useEffect(() => {
  }, [handleRepositories])

  const nextPage = () => {
    if (pagination.page !== 9) {
      setPagination((prev) => ({ page: prev.page + 1, content: repositories.slice((prev.page + 1) * FINAL_POSTS, FINAL_POSTS * (prev.page + 2)) }))
    }
  }

  const previousPage = () => {
    if (pagination.page !== 1) {
      setPagination((prev) => ({ page: prev.page - 1, content: repositories.slice(FINAL_POSTS * (prev.page - 2), (prev.page - 1) * FINAL_POSTS) }))
    }
  }

  return (
    <div>
      {pagination.content.map((post) => (
        <main>
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />

          <button value={post.id} key={post.title} onClick={async (e) => {
            const comentarios = await fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}}/comments`)
            const requestComments = await comentarios.json()
            setPostComments(requestComments);
            console.log(requestComments, e.target.value);
          }}>teste</button>
        </main>
      ))}

      <button onClick={() => nextPage()}>Próxima página</button>
      <button onClick={() => previousPage()}>Página anterior</button>
    </div>
  )
}
export default Home




