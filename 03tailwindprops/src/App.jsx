import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sona",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <div className="p-4 flex gap-4 flex-wrap">
  
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 w-full'>
    Tailwind test
    </h1>
    <h1 className="text-red-500 text-5xl">
    Hello
  </h1>

  <Card username="Sona" btnText="click me" />
  
  <Card username="Pavitra" />

  </div>
  )
}

export default App
