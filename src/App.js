import { useState } from 'react'
import styled from 'styled-components'

// const titleFields = { id: 'titles', fields: ['name', 'dd', 'dr'] }

export default function App () {
  const [counters, setCounters] = useState([
    { id: crypto.randomUUID(), name: 'Try me!' }
  ])
  const [text, setText] = useState('')
  return (
    <Wrapper>
      <div>
        <h1>Sentinals Tracker</h1>
        <ListItem>Name</ListItem>
        <ListItem>HP</ListItem>
        <ListItem>Damage Recieved</ListItem>
        <ListItem>Damage Dealt</ListItem>
        <StyledButton onClick={() => setCounters([])}>Delete All</StyledButton>
      </div>
      <MainBox>
        {counters.map((e, i) => (
          <Counter
            key={e.id}
            name={e.name}
            deleteFn={() => {
              setCounters(counters => counters.filter(obj => obj.id !== e.id))
            }}
          />
        ))}
        <br />
        <div>
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
        </div>
      </MainBox>
    </Wrapper>
  )
}

function Counter ({ name, deleteFn }) {
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
    <CounterWrap>
      <ItemName>{name}</ItemName>
      <span>
        <StyledButton onClick={increase}>+</StyledButton>
        <CountHolder>{counter}</CountHolder>
        <StyledButton onClick={decrease}>-</StyledButton>
      </span>
      <span>
        <StyledButton onClick={damageRecievedIncrease}>+</StyledButton>
        <CountHolder>{dr > 0 ? `+${dr}` : dr}</CountHolder>
        <StyledButton onClick={damageRecievedDecrease}>-</StyledButton>
      </span>
      <span>
        <StyledButton onClick={damageDealtIncrease}>+</StyledButton>
        <CountHolder>{dd > 0 ? `+${dd}` : dd}</CountHolder>
        <StyledButton onClick={damageDealtDecrease}>-</StyledButton>
      </span>
      <StyledButton onClick={reset}>Reset</StyledButton>
      <StyledButton onClick={deleteFn}>Delete</StyledButton>
    </CounterWrap>
  )
}

const Wrapper = styled.div`
  text-align: center;
  & > div {
    margin-right: 200px;
  }
`
const MainBox = styled.div`
  border: solid 3px black;
  min-width: 97vw;
  min-height: 599px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CountHolder = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`

const ItemName = styled.div`
  position: absolute;
  left: calc(15% - 210px);
  /* left: 20vw; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
  display: block;
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
`

const ListItem = styled.span`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 5px;
`

const CounterWrap = styled.div`
  position: relative;
  width: 750px;
  & > * {
    margin: 10px 20px;
  }
`
