import React from 'react'
import { useGetMenuQuery, usePostMenuMutation } from '../redux/menu'

export const MenuDisplay = () => {
  const { data, isLoading } = useGetMenuQuery()
  const [postMenu, result] = usePostMenuMutation()
  console.log(data)
  console.log(isLoading)
  const postHandler = () => {
    alert('postHandler')
    postMenu({
      dish: 'Mole',
      role: 'manager',
      img: 'enchiladas img'
    })
  }
  return (
  <div>
    <h1> Hola </h1>
    <button onClick={postHandler}></button>
  </div>
  )
}

export default MenuDisplay
