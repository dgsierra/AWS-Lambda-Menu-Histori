import React from 'react'
import { useGetOrdersQuery, usePostOrderMutation } from '../redux/Orders'

export const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery()
  // ! Remove this linter after built
  // eslint-disable-next-line no-unused-vars
  const [postOrder, result] = usePostOrderMutation()
  console.log(data)
  const postHandler = () => {
    postOrder({
      user: {
        name: 'Pancho Redux',
        role: 'manager'
      },
      items: ['guacamole', 'tacos']
    })
  }
  return (
  <div>
    <h1> Hola Orders </h1>
    <button onClick={postHandler}> Post Orders</button>
  </div>
  )
}

export default Orders
