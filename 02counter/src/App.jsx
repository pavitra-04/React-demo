import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let[counter,setCounter]= useState(15)
   
  const addValue = () => {
    console.log("clicked", counter)
    counter+=1
    setCounter(counter) 
  }
  
  const decValue = () => {
    console.log("clicked", counter)
    if(counter>0) counter-=1
    setCounter(counter) 
  }

  return (
    <>
    
    <h1>Hi sona</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value</button>
    <br/>

    <button
    onClick={decValue}
    >Decrease value{counter}</button>
    <p>footer: {counter}</p>

    </> 
  )
}

export default App
