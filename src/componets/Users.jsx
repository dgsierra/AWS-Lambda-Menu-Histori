import React, { useEffect, useState } from 'react'

export const Users = () => {
  const [User, setStateUser] = useState('')
  const [menu, setMenu] = useState(null)
  const [filterMenu, setFilter] = useState([])
  const url = 'https://xbgrnp37ak.execute-api.us-east-2.amazonaws.com/'
  // eslint-disable-next-line no-unused-vars

  const handleMenu = (role) => {
    const current = menu[role].filter((item) => item.role === role)
    setFilter(current)
  }

  async function getUserById (id) {
    fetch(`${url}users/${id}`).then((response) => {
      response.json().then((data) => {
        setStateUser(data)
        handleMenu(data.role)
      }
      )
    })
  }

  async function getMenu () {
    fetch(`${url}items`).then(
      (response) => {
        response.json().then((data) => {
          const hash = {
            manager: [],
            employee: []
          }
          for (const item in data) {
            if (data[item].role === 'manager') {
              hash.manager.push(data[item])
            } else {
              hash.employee.push(data[item])
            }
          }
          setMenu(hash)
        })
      }
    )
  }

  useEffect(() => {
    getMenu()
  }, [])
  const postHandler = (e) => {
    setUpLoging()
    e.preventDefault()
    const id = e.target.id.value.toString()
    getUserById(id)
  }

  const setUpLoging = () => {
    const button = document.getElementById('submit-btn')
    button.classList.remove('hidden')
  }
  const itemsOrders = []
  const checkHandler = (e) => {
    if (e.target.checked) {
      itemsOrders.push(e.target.name)
      console.log(itemsOrders)
    } else if (itemsOrders.length > 0) {
      const element = itemsOrders.indexOf(e.target.name)
      itemsOrders.splice(element, 1)
      console.log(itemsOrders)
    }
  }

  const orderHandler = async (itemsOrders, user) => {
    const now = new Date()
    const date = now.toLocaleDateString()
    const time = now.toLocaleTimeString()
    const object = { items: itemsOrders, user: user, status: false }
    const params = {
      method: 'PUT',
      body: JSON.stringify(object)
    }
    fetch(`${url}orders`, params)
      .then((response) => response.json())
      .then((response) => alert(`${response}${time} de ${date}`))
      .catch((err) => console.error(err))
    console.log(JSON.stringify(object))
  }
  return (
    <div className="container flex flex-col justify-center">
      <h1 className="font-sans text-4xl bg-red-500 text-center">
        {" "}
        Hola {User.name}{" "}
      </h1>
      <form onSubmit={postHandler}>
        <label htmlFor="id">ID:</label>
        <input
          className="border-solid border-spacing-0 border-2 p-4 border-r-4 rounded-xl placeholder:test "
          type="text"
          name="name"
          id="id"
          placeholder="Introduce tu numero de empleado"
        />
        <button type="submit" className="rounded-lg bg-blue-500 p-4">
          Submit
        </button>
      </form>
      <section className='flex flex-col justify-center'>
        <h1 className="text-2xl text-orange-500">Menu Disponible:</h1>
        <div className="contianer flex flex-wrap justify-center p-10 gap-10">
          {filterMenu.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg border-solid">
                <img src={item.img} alt="" className="w-full" />
                <h1 key={index} className="font-bold text-xl mb-2">
                  {item.dish}
                </h1>
                <input
                  type="checkbox"
                  id={item.dish}
                  name={item.dish}
                  onChange={checkHandler}></input>
              </div>
            );
          })}
        </div>
        <button
          id="submit-btn"
          onClick={() => orderHandler(itemsOrders, User)}
          className=" rounded-lg bg-blue-500 p-4 mx-40 text-white">
          Enviar Order
        </button>
      </section>
    </div>
  );
}

export default Users
