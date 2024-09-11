
import { useState } from 'react'
import vehicles from './data/vehicles'
import VehiclesList from './components/VehiclesList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <VehiclesList vehicles={vehicles} />
      </div>
    </>
  )
}

export default App