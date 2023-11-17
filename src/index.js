import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering... ', counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => console.log('Clickiado')}>
       Sumale Uno :V
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)