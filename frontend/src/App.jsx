import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    }) 
  })
  

  return (
    <>
        <h1>Tenz is the GOAT</h1>
        <p>JOKES : {jokes.length}</p>

        {
          jokes.map((joke, index)=>(
            <div key={jokes.id}>
              <h3>Number: {joke.title}</h3>
              <p>Joke : {joke.content}</p>
            </div>
          ))
        }
    </>
  )
}

export default App
