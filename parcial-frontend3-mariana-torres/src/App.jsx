import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Components/Formulario'

function App() {

  const [inputValue, setInputValue] = useState({name: '', color: ''})

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const [styles, setStyles] = useState({
    background: 'transparent',
    color: 'white'
  })

  const handleSubmit = (e) => {e.preventDefault()
    if (
      inputValue.name.length >= 3 &&
      inputValue.color.length >= 6 &&
      inputValue.name.indexOf(' ') !== 0
    ) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
      setShow(false);
    }}


  return (
    <>
      <h1>Elige un color</h1>
      <Formulario handleSubmit={handleSubmit} setInputValue={setInputValue} setErr={setErr} setStyles={setStyles}/>
      

    </>
  )
}

export default App
