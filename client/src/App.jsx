import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Education from './components/Education'
import Experience from './components/Experience'
import Extra from './components/Extra'
import Personal from './components/Personal'
import Projects from './components/Projects'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1 className="text-3xl text-center font-bold underline">
      Let's Generate You Report
  </h1>
  <Form/>
  
  </>

  )
}

export default App



