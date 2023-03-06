import { React, useState } from 'react'
import { usePostUserMutation, useGetUserQuery } from '../redux/user'

export const Form = () => {
    const [status, setStatus] = useState('idle')
    const [postUser, result] = usePostUserMutation()
    const submitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const role = e.target.role.value
        const id = e.target.id.value
        const object = { name, role, id }
        if (name === '' || role === '' || id === '') {
            alert('Todos los campos son obligatorios')
            return
        }
        setStatus(result)
        postUser(object)
        console.log(result)
        useGetUserQuery(id)
    }
    console.log(status)
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="role">Role</label>
            <select type="text" name="role" id="role">
                <option value="manager">Manager</option>
                <option value="employee">Empleado</option>
            </select>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" id="id" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
