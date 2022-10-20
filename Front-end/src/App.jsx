import { useState } from 'react'

import './App.css'
import { Allroutes } from './components/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Allroutes/>
    </div>
  )
}

export default App
