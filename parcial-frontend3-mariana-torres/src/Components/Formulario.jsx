import React, { useState } from 'react'

const Formulario = ({handleSubmit, setInputValue, setStyles}) => {


  return (
    <div className="mainContainer">
      <form className="container" onSubmit={handleSubmit}>
        <label>Ingresa tu nombre:</label>
        <input
          className="dataInput"
          type="text"
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
        />
        <label>Ingresa tu color favorito:</label>
        <input
          className="dataInput"
          type="text"
          onChange={(e) =>
            setInputValue({ ...inputValue, color: e.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>

      {show && (
        <Card>
          <div className="data">
            <h2>Hola{inputValue.name}</h2>
            <p>Sabemos que tu color favorito es: </p>
            <div className="colorFavorito">{inputValue.color}</div>
          </div>
        </Card>
      )}
      {err && <h2>Por favor chequea que la información sea correcta</h2>}



    </div>
  )
}

export default Formulario