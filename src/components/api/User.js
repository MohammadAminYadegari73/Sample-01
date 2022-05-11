import React, { useState, useEffect } from 'react'
import React from 'react'
export const User = ({ changeItem }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [])
  const getUsers = () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/users`;
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        setUsers(data);
      },
        (error) => {
          console.log('error in log')
        })
  }
  return (
    <select className='form-control' onChange={(event) => changeItem(event.target.value)}>
      <option>انتخاب کنید</option>
      {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
    </select>
  )
}