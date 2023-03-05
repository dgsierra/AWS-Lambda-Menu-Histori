import React from 'react'
import { useGetUserQuery, usePostUserMutation } from '../redux/user'
export const Users = () => {
  const [postUser, result] = usePostUserMutation()
  const { data, isLoading } = useGetUserQuery()
  // ! Remove this linter after built
  // eslint-disable-next-line no-unused-vars
  const postHandler = () => {
    postUser({
      name: 'Pancho Redux',
      role: 'manager',
      id: '2'
    })
  }
  return (
  <div>
    <h1> Hola Users </h1>
    <button onClick={postHandler}> Users Test</button>
    <button onClick={postHandler}> Login </button>
  </div>
  )
}

export default Users
