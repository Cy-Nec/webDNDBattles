import { useState } from 'react'
import './App.css'
import playerIcon from './assets/player.svg'
import dmIcon from './assets/dm.svg'
import DmPage from './pages/DmPage'
import PlayerPage from './pages/PlayerPage'

function App() {
  const [role, setRole] = useState(null)

  if (role === 'dm') {
    return <DmPage onBack={() => setRole(null)} />
  }

  if (role === 'player') {
    return <PlayerPage onBack={() => setRole(null)} />
  }

  return (
    <div className="app">
      <h1>Выберите роль</h1>
      <div className="buttons-container">
        <button className="role-button" onClick={() => setRole('player')}>
          <img src={playerIcon} alt="Игрок" className="button-icon" />
          <span>Игрок</span>
        </button>
        <button className="role-button" onClick={() => setRole('dm')}>
          <img src={dmIcon} alt="ДМ" className="button-icon" />
          <span>ДМ</span>
        </button>
      </div>
    </div>
  )
}

export default App
