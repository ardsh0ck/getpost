import React, { useState, useEffect } from 'react'
import './assets/scss/main.scss'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Users from './components/Users/Users'

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  const [postedSuccessfully, setPostedSuccessfully] = useState(false)

  const handlePostSuccess = (success) => {
    setPostedSuccessfully(success)
  }

  const postedSuccessfullyTrue = postedSuccessfully === true

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
      )
      const data = await response.json()
      setUsers(data.users)
      setTotalPages(data.total_pages)
      if (postedSuccessfullyTrue) {
        setPostedSuccessfully(false)
        setPage(1)
      }
    }
    fetchUsers()
    console.log('fetch')
  }, [postedSuccessfullyTrue])

  const handleShowMore = async () => {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${
        page + 1
      }&count=6`
    )
    const data = await response.json()
    setUsers([...users, ...data.users])
    setPage(page + 1)
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Users
          page={page}
          pages={totalPages}
          data={users}
          showMore={handleShowMore}
        />
        <Form onPostSuccess={handlePostSuccess} />
      </main>
    </>
  )
}

export default App
