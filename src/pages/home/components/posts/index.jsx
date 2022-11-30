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
  // fazendo a requisição dos posts na página principal
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

  // logica de trocar de pagination, utilizadas no onclick dos botões
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

      <div className='buttons'>
        <Button onClick={() => previousPage()} text="Página anterior" />
        <Button onClick={() => nextPage()} text="Próxima página" />
      </div>
    </S.PostContainer>
  )
}
function Button({ text, onClick }) {
  return <S.Button onClick={onClick} type="button">
    {text}
  </S.Button>
}