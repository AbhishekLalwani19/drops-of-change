import { useState } from 'react'
import './App.css'
import Aboutus from './pages/aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Aboutus></Aboutus>
    </>
  )
}

export default App
