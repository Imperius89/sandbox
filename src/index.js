import { useState } from "react";
import ReactDOM from "react-dom";
import './styles.css'

const App =() => {
  const [left, setLeft] = useState(10)
  const [right, setRight] = useState(20)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        Left
      </button>
      <button onClick={() => setRight(left +1)}>
        Right
      </button>
      {right}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)