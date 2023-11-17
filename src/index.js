import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () =>  setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter - 1)

  console.log('rendering... ', counter)

  return (
    <div>
      <Display counter={counter}/>
      <Button 
        handleClick={increaseByOne}
        text='Sumale uno'
      />
      <Button 
        handleClick={setToZero}
        text='Zero'
      />
      <Button 
        handleClick={decreaseByOne}
        text='Quitale uno'
      />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
