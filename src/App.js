import { react, useState } from 'react'

import './App.css'

function App () {
  const [counters, setCounters] = useState([{ id: crypto.randomUUID() }])
  return (
    <div className='App'>
      <h1>Sentinals HP Tracker</h1>
      <div className='mainBox'>
        {counters.map((e, i) => (
          <div key={e.id}>
            <Counter />
            <button
              onClick={() => {
                setCounters(counters => counters.filter(obj => obj.id !== e.id))
              }}
            >
              Harold
            </button>
          </div>
        ))}
        {/* <Counter></Counter> THIS IS WHAT IT SHOULD DO */}
        <br />
        <button
          onClick={() => {
            setCounters(counters => [...counters, { id: crypto.randomUUID() }])
          }}
        >
          Create New
        </button>
      </div>
    </div>
  )
}

function Counter () {
  const [counter, setCounter] = useState(0)
  //increase counter
  const increase = () => {
    setCounter(count => count + 1)
  }

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1)
  }

  //reset counter
  const reset = () => {
    setCounter(0)
  }

  return (
    <>
      <br />
      <button onClick={increase}>+</button>
      <span className='nameHolder'>{counter}</span>
      <button onClick={decrease}> -</button>
      <button onClick={reset}>reset</button>
      {/* 
      <input type='text' placeholder='To be tracked...' />
    <input type='button' className='submit-btn' value={'Track!'} /> */}
    </>
  )
}

export default App
