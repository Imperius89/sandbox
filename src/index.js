import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById('root')

const Counter= ({contador}) => {
  console.log('Counter Render :V')
  return <h1>{contador}</h1>
}
const App =(props) => {
  const [contadorValue, updateContador]  = useState(13)

  /*
  const contador = useState(13)
  const contadorValue = contador[0]
  const updateContador = contador[1]
  */
  console.log('Render?')

  const handleOnClick = () => {
    //updateContador(contadorValue + 1);
    updateContador((prevContrador) => {
      return prevContrador +1;
    });
  };

  const handleOnClickReset =() => {
    updateContador(0)
  }

  const isEven = contadorValue % 2 === 0
  const isEvenMessage = isEven ? 'Es Par alv ' : 'No es par olv'

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter contador={contadorValue} />
      <p>{isEvenMessage}</p>
      <button 
        onClick={handleOnClick}
        >
        Incrementar
      </button>
      <button 
        onClick={handleOnClickReset}
        >
        Resetiar
      </button>
    </div>
  )
}

ReactDOM.render(<App />, rootElement);
