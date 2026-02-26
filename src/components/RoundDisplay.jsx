import './RoundDisplay.css'

function RoundDisplay({ round }) {
  return (
    <div className="round-display">
      <span>Раунд</span>
      <span className="round-number">{round}</span>
    </div>
  )
}

export default RoundDisplay
