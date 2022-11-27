import React from 'react';
import { useEffect, useState } from "react"
// import { Link, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import Header from '../components/Header'
 

function Home() {
  const [repositories, setRepositories] = useState()
  const [handleRepositories] = useState()
  const [pagination, setPagination] = useState({ page: 1, content: [] })
  const [postComentarios,  setPostComentarios] = useState([])

  // criar variavel para evitar magic number
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

  //  logica pra pegar os comentarios 

  //    <button  onClick={async() => {
  //      const comentarios = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}/comments`)
  //      setPostComentarios(comentarios);
  //    console.log(await comentarios.json());
  //  }}>teste</button>

  return (
    <section>
      <Header />
      <h1>Blog Btix</h1>
      {pagination.content.map((post) => (
        <main>
        <PostCard
          key= {post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />

        <button value={post.id} key={post.title}  onClick={async(e) => {
          const comentarios = await fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}}/comments`)
          const requestComments = await comentarios.json()
          setPostComentarios(requestComments);
        console.log(requestComments, e.target.value);
      }}>teste</button>
      </main>
      ))}
 
      <button onClick={() => nextPage()}>proxima pag</button>
      <button onClick={() => previousPage()}>voltar</button>
    </section >
  )
}

export default Home