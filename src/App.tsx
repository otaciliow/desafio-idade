import { useState, FormEvent } from 'react';

import './App.min.css';

interface IUserProps {

  name: string;
  age: number;
}

function App() {

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userInfo, setUserInfo] = useState<IUserProps>();

  function calcular(e: FormEvent) {
    e.preventDefault();

    const currentYear = new Date().getFullYear();

    setUserInfo({
      name: userName,
      age: currentYear - Number(userAge)
    });

  }

  return (
    <main>
      <div className="container">
        <h1 className="title">Descubra sua idade</h1>
        <form onSubmit={calcular} className="form-idade" id="form-idade">

            <label htmlFor="nome" className="form-label">Qual é o seu nome?</label>
            <input type="text" className="form-input" id="nome" placeholder="Digite seu nome" value={userName} onChange={(e) => {setUserName(e.target.value)}} required />

            <label htmlFor="ano-nascimento" className="form-label">Em que ano você nasceu?</label>
            <input type="number" className="form-input" id="ano-nascimento" placeholder="Digite o ano de nascimento" value={userAge} min="1" onChange={(e) => {setUserAge(e.target.value)}} />

          <button className="form-button">Descobrir idade</button>
        </form>

        {userInfo && userInfo.name !== '' &&
          <p className="info-result">{userInfo.name} você tem {userInfo.age} anos!</p>
        }
        
      </div>
    </main>
  )
}

export default App
