import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './spherecreate'

function App() {
  const [count, setcount] = useState(0)
  console.log(useState());
  return (
    <div className='app'>
      <button onClick={() => setcount(count + 1)}>click here to add some spheres</button>
      <button onClick={() => setcount(0)}>clear</button>
      <p>here are {count} spheres</p>
      <div className='spawn'></div>
    </div>
  
  )
}

export default App
