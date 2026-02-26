import { useState } from 'react'
import './AddParticipantModal.css'

function AddParticipantModal({ isOpen, onClose, onAdd }) {
  const [newParticipant, setNewParticipant] = useState({
    type: 'player',
    name: '',
    hp: '',
    friend: true
  })

  const handleAdd = () => {
    if (newParticipant.name.trim()) {
      onAdd({
        ...newParticipant,
        hp: parseInt(newParticipant.hp) || 0
      })
      setNewParticipant({ type: 'player', name: '', hp: '', friend: true })
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <h2>Добавить участника</h2>

        <div className="form-group">
          <label>Тип:</label>
          <div className="type-selector">
            <button
              type="button"
              className={`type-btn ${newParticipant.type === 'player' ? 'active' : ''}`}
              onClick={() => setNewParticipant({...newParticipant, type: 'player'})}
            >
              Игрок
            </button>
            <button
              type="button"
              className={`type-btn ${newParticipant.type === 'npc' ? 'active' : ''}`}
              onClick={() => setNewParticipant({...newParticipant, type: 'npc'})}
            >
              NPC
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {newParticipant.type === 'player' ? 'Имя игрока' : 'Название NPC'}:
          </label>
          <input
            id="name"
            type="text"
            value={newParticipant.name}
            onChange={e => setNewParticipant({...newParticipant, name: e.target.value})}
            placeholder={newParticipant.type === 'player' ? 'Введите имя' : 'Введите название'}
            autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="hp">ХП:</label>
          <input
            id="hp"
            type="number"
            value={newParticipant.hp}
            onChange={e => setNewParticipant({...newParticipant, hp: e.target.value})}
            placeholder="100"
            min="0"
          />
        </div>

        {newParticipant.type === 'npc' && (
          <div className="form-group">
            <label>Отношение:</label>
            <div className="type-selector">
              <button
                type="button"
                className={`type-btn ${newParticipant.friend ? 'active' : ''}`}
                onClick={() => setNewParticipant({...newParticipant, friend: true})}
              >
                🛡️ Друг
              </button>
              <button
                type="button"
                className={`type-btn ${!newParticipant.friend ? 'active' : ''}`}
                onClick={() => setNewParticipant({...newParticipant, friend: false})}
              >
                ⚔️ Враг
              </button>
            </div>
          </div>
        )}

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Отмена
          </button>
          <button className="confirm-btn" onClick={handleAdd}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddParticipantModal
