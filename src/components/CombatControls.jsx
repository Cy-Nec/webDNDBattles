import RoundDisplay from './RoundDisplay'
import './CombatControls.css'

function CombatControls({ round, onEndTurn, onEndCombat }) {
  return (
    <div className="combat-controls">
      <RoundDisplay round={round} />
      <button className="end-turn-button" onClick={onEndTurn}>
        Конец хода ⏭️
      </button>
      <button className="end-combat-button" onClick={onEndCombat}>
        Завершить бой
      </button>
    </div>
  )
}

export default CombatControls
