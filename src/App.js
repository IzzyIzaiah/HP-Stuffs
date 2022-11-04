import { useState } from 'react'
import styled from 'styled-components'

export default function App () {
  const [counters, setCounters] = useState([
    { id: crypto.randomUUID(), name: 'Try me!' }
  ])
  const [text, setText] = useState('')
  return (
    <Wrapper>
      <div>
        <h1>Sentinals HP Tracker</h1>
        <ListItem>Name</ListItem>
        <ListItem>HP</ListItem>
        <ListItem>Damage Recieved</ListItem>
        <ListItem>Damage Dealt</ListItem>
      </div>
      <MainBox>
        {counters.map((e, i) => (
          <div key={e.id}>
            <Counter name={e.name} />
            <StyledButton
              className='npnm'
              onClick={() => {
                setCounters(counters => counters.filter(obj => obj.id !== e.id))
              }}
            >
              Delete
            </StyledButton>
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
        <StyledButton
          className='npnm'
          onClick={() => {
            setCounters(counters => [
              ...counters,
              { id: crypto.randomUUID(), name: text }
            ])
            setText('')
          }}
        >
          Create New
        </StyledButton>
      </MainBox>
    </Wrapper>
  )
}

function Counter ({ name }) {
  const [counter, setCounter] = useState(0)
  // Damag Recieved (DR)
  const [dr, setDR] = useState(0)
  // Damage Dealt (DD)
  const [dd, setDD] = useState(0)

  //increase counters
  const increase = () => {
    setCounter(count => count + 1)
  }
  const damageRecievedIncrease = () => {
    setDR(dr => dr + 1)
  }
  const damageDealtIncrease = () => {
    setDD(dd => dd + 1)
  }

  //decrease counters
  const decrease = () => {
    setCounter(count => count - 1)
  }
  const damageRecievedDecrease = () => {
    setDR(dr => dr - 1)
  }
  const damageDealtDecrease = () => {
    setDD(dd => dd - 1)
  }

  //reset counter
  const reset = () => {
    setCounter(0)
    setDD(0)
    setDR(0)
  }

  return (
    <>
      <br />
      <Examble>{name}</Examble>
      <StyledButton onClick={increase}>+</StyledButton>
      <NameHolder>{counter}</NameHolder>
      <StyledButton className='minus' onClick={decrease}>
        -
      </StyledButton>
      <StyledButton onClick={damageRecievedIncrease}>+</StyledButton>
      <NameHolder>{dr > 0 ? `+${dr}` : dr}</NameHolder>
      <StyledButton className='minus' onClick={damageRecievedDecrease}>
        -
      </StyledButton>
      <StyledButton onClick={damageDealtIncrease}>+</StyledButton>
      <NameHolder>{dd > 0 ? `+${dd}` : dd}</NameHolder>
      <StyledButton className='minus' onClick={damageDealtDecrease}>
        -
      </StyledButton>
      <StyledButton className='npnm' onClick={reset}>
        Reset
      </StyledButton>
    </>
  )
}

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
  margin-left: 220px;
  margin-right: 20px;
  margin-bottom: 5px;
`

const StyledButton = styled.button`
  cursor: pointer;
  outline: 0;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #0d6efd;
  height: 26px;
  :hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  &.npnm {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 5px;
  }
  &.minus {
    margin-right: 40px;
  }
  &.plus {
    margin-left: 40px;
  }
`

const ListItem = styled.span`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 5px;
`
