import { useState } from "react";
import ReactDOM from "react-dom";
import './styles.css'

const App =() => {
  //const [left, setLeft] = useState(10)
  //const [right, setRight] = useState(20)

  const[counters, setCounters] = useState({
    left: 0,
    right: 0,
    clicks: 0
  })

  const handleClickLeft = () => {
    setCounters({
      left: counters.left +1,
      right: counters.right,
      clicks: counters.clicks + 1
    })
  }

  const handleClickRight = () => {
    setCounters({
      left: counters.left,
      right: counters.right +1,
      clicks: counters.clicks + 1
    })
  }

  const reset =() =>{
    setCounters({
      left: 0,
      right: 0,
      clicks: 0
    })
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>
        Left
      </button>
      <button onClick={reset}>
        Reset
      </button>
      <button onClick={handleClickRight}>
        Right
      </button>
      {counters.right}
      <p>Clicks totales: {counters.clicks}</p>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)