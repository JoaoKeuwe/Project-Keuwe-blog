import React from 'react';
import { useEffect, useState } from "react"
import { Link,  } from 'react-router-dom';
import pessoa1 from '../images/pessoa1.jpg'
// import {Link} from "react-router-dom"


function Header() {

  const [repositories, setRepositories] = useState({})
  const [handleRepositories, setHandleRepositories] = useState()
  const [page, setPage] = useState(0)



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setHandleRepositories(data.slice(0, 10))
        // console.log(data);
      })
  }, [])

  const ramdom = () => {
    setHandleRepositories(repositories.slice(page * 10, 10 * (page+1)))
    console.log(repositories.slice(page * 10, 10 * (page+1)));
    console.log(repositories);
    
    if(page !== 9) {
      setPage(page+1)
    }
  } 




  return (
    <section>
      <img width={100} src={pessoa1} alt="" />
      <h1>kkk</h1>
      {handleRepositories?.map((id) => (
        <div key={id.id}>
          <Link to='#'>
          <p>{id.id}</p>
           <h2>{id.title}</h2>
           <p>{id.body}</p>
          <hr />
          <button onClick={() => ramdom()}>clique</button>
          </Link>
        </div>
        
  )
      )
}

    </section >
  )
}

export default Header