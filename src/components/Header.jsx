import React from 'react';
import { useEffect, useState } from "react"
import { Link, } from 'react-router-dom';
import pessoa1 from '../images/pessoa1.jpg'
// import {Link} from "react-router-dom"


function Header() {

  const [repositories, setRepositories] = useState()
  const [handleRepositories, setHandleRepositories] = useState()
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({ page: 1, content: null })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        // setHandleRepositories(data.slice(0, 10))
        setPagination({ page: 1, content: data.slice(0, 10) })
        // console.log(data);
      })
  }, [])

  useEffect(() => {
  }, [handleRepositories])

  const ramdom = () => {
    // setPage(page + 1)
    // setHandleRepositories(repositories.slice(page * 10, 10 * (page + 1)))
    console.log(page);
    if (pagination.page !== 9) {
      setPagination((prev) => ({ page: prev.page + 1, content: repositories.slice((prev.page + 1) * 10, 10 * (prev.page + 2)) }))
     }
  }

  const ramdom2 = () => {
    console.log(page);
    if (pagination.page !== 1) {
      setPagination((prev) => ({ page: prev.page - 1, content: repositories.slice(10 * (prev.page - 2), (prev.page - 1) * 10) }))
    }
  }


  return (
    <section>
      <img width={100} src={pessoa1} alt="" />
      <h1>kkk</h1>
      {pagination.content?.map((id) => (
        <div key={id.id}>
          <Link to='#'>
            <p>{id.id}</p>
            <h2>{id.title}</h2>
            <p>{id.body}</p>
            <hr />
          </Link>
        </div>

      )
      )
      }
      <button onClick={() => ramdom()}>proxima pag</button>
      <button onClick={() => ramdom2()}>voltar</button>
    </section >
  )
}

export default Header