import { react, useState } from 'react'
import styled from 'styled-components'

function App () {
  const [counters, setCounters] = useState([
    { id: crypto.randomUUID(), name: 'Try me!' }
  ])
  const [text, setText] = useState('')
  return (
    <Wrapper>
      <h1>Sentinals HP Tracker</h1>
      <MainBox>
        {counters.map((e, i) => (
          <div key={e.id}>
            <Counter name={e.name} />
            <button
              onClick={() => {
                setCounters(counters => counters.filter(obj => obj.id !== e.id))
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <br />
        <input
          value={text}
          placeholder='Name Here!'
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setText(e.target.value)
              setCounters(counters => [
                ...counters,
                { id: crypto.randomUUID(), name: text }
              ])
              setText('')
            }
          }}
          onChange={e => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setCounters(counters => [
              ...counters,
              { id: crypto.randomUUID(), name: text }
            ])
            setText('')
          }}
        >
          Create New
        </button>
      </MainBox>
    </Wrapper>
  )
}

function Counter ({ name }) {
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
      <Examble>{name}</Examble>
      <button onClick={increase}>+</button>
      <NameHolder>{counter}</NameHolder>
      <button onClick={decrease}> -</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App

const Wrapper = styled.div`
  text-align: center;
`
const MainBox = styled.div`
  border: solid 3px black;
  min-width: 97vw;
  min-height: 599px;
  padding: 5px;
`
const NameHolder = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`

const Examble = styled.span`
  padding-right: 10px;
`
