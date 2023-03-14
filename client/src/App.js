import React, { useState, useEffect } from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    console.log('hello')
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.users == 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => {
          return <p key={i}>{user}</p>
        })
      )}
    </div>
  )
}

export default App