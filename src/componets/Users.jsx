import React, { useEffect, useState } from 'react'
import { useGetUserQuery } from '../redux/user'
import { useFetchUserDataById } from './UserFetchHook'
import { useSelector } from 'react-redux'

export const Users = () => {
  let current = null
  const [stateUser, setStateUser] = useState(null)
  const [nameUser, setNameUser] = useState('Anonimo')
  const { data, isLoading } = useGetUserQuery(stateUser)
  console.log("data", data)
  const userData = useSelector((state) => state.userApi)
  // ! Remove this linter after built
  // eslint-disable-next-line no-unused-vars
  useEffect(
    () => {
      console.log("userData", userData)
    }
  , [userData]
  )
  const postHandler = (e) => {
    e.preventDefault()
    const id = e.target.id.value.toString()
    setStateUser(id)
  }
  return (
  <div>
    <h1> Hola {nameUser} </h1>
    <form onSubmit={postHandler}>
      <label htmlFor="id">ID:</label>
      <input type="text" name="name" id="id" />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Users
