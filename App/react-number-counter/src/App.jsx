import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const subValue = () => {
    if(counter>0){
      counter = counter - 1
      setCounter(counter)

    }
    
  }

  return (
    <>
    <h1>React Number Counter</h1>
    <h2>Counter value = {counter}</h2>

    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br/>
    <button
    onClick={subValue}
    
    >Remove Value {counter}</button>
    </>
  )
}

export default App
