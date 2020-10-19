import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    document.title = `You have ${likes} likes`
  })

  const updateLikes = () => setLikes(likes + 1)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <div>My shoobi doobi post</div>
        <button on onClick={updateLikes}>Like</button>
      </div>
    </div>
  )
}