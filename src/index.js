import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () =>  setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  console.log('rendering... ', counter)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>
       Sumale Uno :V
      </button>
      <button onClick={setToZero}>
        Zero
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
