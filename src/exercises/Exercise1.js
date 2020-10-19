import React, { useState } from 'react'

export default function Exercise1() {
  let [user, setUser] = useState("")
  let [city, setCity] = useState("")
  let [country, setCountry] = useState("")
  const countries = ['united states', 'china', 'united kingdom', 'australia']

  const handleChange = (event) => setCountry(event.target.value)
  const updateName = (event) => setUser(event.target.value)
  const updateCity = (event) => setCity(event.target.value)
 
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type="text" value={user} onChange={updateName} />
        <input type="text" value={city} onChange={updateCity} />
        <select id="items" onChange={handleChange}>
            <option value={countries[0]} onChange={handleChange}></option>
            <option value={countries[1]} onChange={handleChange}></option>
            <option value={countries[2]} onChange={handleChange}></option>
            <option value={countries[3]} onChange={handleChange}></option>
        </select>
      </div>
    </div>
  )
}