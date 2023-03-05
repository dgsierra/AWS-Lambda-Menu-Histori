import React from 'react'
import { usePostUserMutation } from '../redux/user'

export const Form = () => {
    const [postUser, result] = usePostUserMutation()
    const submitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const role = e.target.role.value
        const id = e.target.id.value
        console.log(name, role, id)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="role">Role</label>
            <input type="text" name="role" id="role" />
            <label htmlFor="id">ID</label>
            <input type="text" name="id" id="id" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
