import { useState } from "react";
import ReactDOM from "react-dom";
import './styles.css'

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
  return <p> {clicks.join(", ")} </p>
}

const App =() => {
  //const [left, setLeft] = useState(10)
  //const [right, setRight] = useState(20)

  const[counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: 'mensaje anclado al estado'
  });

  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    const newCountersState ={
      ...counters,
      left: counters.left + 1
    }
    setCounters(newCountersState);
    setClicks(prevClicks => {
      return [...prevClicks, 'L']
    })
  }

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    });
    setClicks(prevClicks => {
      return [...prevClicks, 'R']
    })
  }

  const reset =() =>{
    setCounters({
      ...counters,
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
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0
        ? <WarningNotUsed />
        : <ListOfClicks clicks={clicks} />
      }
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)