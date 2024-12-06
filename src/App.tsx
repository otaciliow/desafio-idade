import { useState } from 'react'

import './App.css'

function App() {

  return (
    <main>
      <div className="container">
        <h1 className="title">Descubra sua idade</h1>
        <form action="" className="form-idade" id="form-idade">
          
          <label htmlFor="nome" className="form-label">Qual é o seu nome?</label>
          <input type="text" className="form-input" id="nome" placeholder="Digite seu nome" />
          
          <label htmlFor="ano-nascimento" className="form-label">Em que ano você nasceu?</label>
          <input type="text" className="form-input" id="ano-nascimento" placeholder="Digite o ano de nascimento" />
          
          <button className="form-button">Descobrir idade</button>
        </form>
        <p className="info-result"></p>
      </div>
    </main>
  )
}

export default App
