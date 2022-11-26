import React from 'react';
import { useEffect, useState } from "react"
// import { Link, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
// import {Link} from "react-router-dom"

function Home() {
  const [repositories, setRepositories] = useState()
  const [handleRepositories] = useState()
  const [pagination, setPagination] = useState({ page: 1, content: [] })

  const state = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setPagination({ page: 1, content: data.slice(0, 10) })
      })
  }
  useEffect(() => {
    state()
  }, [])

  useEffect(() => {
  }, [handleRepositories])

  const nextPage = () => {
    if (pagination.page !== 9) {
      setPagination((prev) => ({ page: prev.page + 1, content: repositories.slice((prev.page + 1) * 10, 10 * (prev.page + 2)) }))
    }
  }

  const previousPage = () => {
    if (pagination.page !== 1) {
      setPagination((prev) => ({ page: prev.page - 1, content: repositories.slice(10 * (prev.page - 2), (prev.page - 1) * 10) }))
    }
  }

  //  logica pra pegar os comentarios 

  //   <button  onClick={async() => {
  //     const comentarios = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}/comments`)
  //     setPostComentarios(comentarios);
  //     console.log(await comentarios.json());
  //   }}>teste</button>

  return (
    <section>
      <h1>Blog Btix</h1>
      {pagination.content.map((post) => (
        <PostCard
          key= {post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
 
      <button onClick={() => nextPage()}>proxima pag</button>
      <button onClick={() => previousPage()}>voltar</button>
    </section >
  )
}

export default Home