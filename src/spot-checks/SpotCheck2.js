import React, { useState } from 'react'

export default function SpotCheck2() {
  const [isLoading, setLoading] = useState(true)
  const [lesson, setLesson] = useState({ name: 'React Hooks', completed: false, started: false })

  const updateLesson = (key) => setLesson({ ...lesson, [key]: true })

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading ? 
        <div>Page is loading...</div> : 
        <div>
            <p>{lesson.name}</p>
            <p>{lesson.completed ? 'Lesson status: Completed' : (lesson.started ? 'Lesson status: in progress...' : 'Lesson status: Not started')}</p>
        </div>}
        <button onClick={() => updateLesson('started')}>Begin lesson</button>
        <button onClick={() => updateLesson('completed')}>Complete lesson</button>

      </div>
    </div>
  )
}