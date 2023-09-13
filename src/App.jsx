import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddForm />
    </>
  )
}

export default App
