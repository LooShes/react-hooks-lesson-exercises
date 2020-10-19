import React, { useState, useEffect } from 'react'
import axios from '../../node_modules/axios/dist/axios';

export default function Exercise2() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
    const users = await axios.get('https://randomuser.me/api/?results=5')
    //console.log(users.data.results)
    setUsers(users.data.results)
  })()
  }, [])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
      {users.map((u) => {
          return (
        <li>
          <ul>{users.name.first}</ul>
          <ul>{users.name.last}</ul>
          <ul><img src={users.picture.thumbnail} /></ul>
        </li>
          )
      })}
      </div>
    </div>
  )
}