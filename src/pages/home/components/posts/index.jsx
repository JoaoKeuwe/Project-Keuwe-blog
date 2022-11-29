import React from 'react'
import { useEffect, useState } from "react"
import PostCard from '../../../../components/postCard';
import * as S from './style' 

export function Posts() {
  const [pagination, setPagination] = useState({ page: 1, content: [] })
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
    <S.PostContainer>
      {pagination.content.map((post) => (
        
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        
      ))}

      <button onClick={() => nextPage()}>Próxima página</button>
      <button onClick={() => previousPage()}>Página anterior</button>
    </S.PostContainer>
  )
}




