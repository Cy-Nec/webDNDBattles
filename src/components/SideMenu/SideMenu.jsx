import { useState } from 'react'
import './SideMenu.css'
import closeIcon from '../../../public/close.svg'
import arrowDropIcon from '../../../public/arrow_drop.svg'
import WantedSection from './WantedSection/WantedSection'

function SideMenu({ isOpen, onClose, onEndCombat, isCombatMode, wantedParticipants, onAddWantedParticipant, onRemoveWantedParticipant, onEditWantedParticipant, onJoinCombat, onReviveWantedParticipant }) {
  const [wantedOpen, setWantedOpen] = useState(false)
  const [imgOpen, setImgOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="side-menu-backdrop" onClick={onClose}>
      <div className="side-menu" onClick={(e) => e.stopPropagation()}>
        <div className="side-menu-header">
          <h2>Меню</h2>
          <button className="close-menu-btn" onClick={onClose}>
            <img src={closeIcon} alt="Закрыть" className="close-icon" />
          </button>
        </div>

        <div className="side-menu-content">
          {/* Раздел WANTED */}
          <div className="side-menu-section full-width">
            <div className="side-menu-section-header">
              <span>WANTED</span>
              <button
                className="side-menu-section-toggle"
                onClick={() => setWantedOpen(!wantedOpen)}
              >
                <img
                  src={arrowDropIcon}
                  alt={wantedOpen ? 'Свернуть' : 'Развернуть'}
                  className={`arrow-drop-icon ${wantedOpen ? 'expanded' : ''}`}
                />
              </button>
            </div>
            {wantedOpen && (
              <div className="side-menu-section-content">
                <WantedSection
                  participants={wantedParticipants}
                  onAddParticipant={onAddWantedParticipant}
                  onRemoveParticipant={onRemoveWantedParticipant}
                  onEditParticipant={onEditWantedParticipant}
                  onJoinCombat={onJoinCombat}
                  onReviveParticipant={onReviveWantedParticipant}
                />
              </div>
            )}
          </div>

          {/* Раздел IMG */}
          <div className="side-menu-section full-width">
            <div className="side-menu-section-header">
              <span>IMG</span>
              <button
                className="side-menu-section-toggle"
                onClick={() => setImgOpen(!imgOpen)}
              >
                <img
                  src={arrowDropIcon}
                  alt={imgOpen ? 'Свернуть' : 'Развернуть'}
                  className={`arrow-drop-icon ${imgOpen ? 'expanded' : ''}`}
                />
              </button>
            </div>
            {imgOpen && (
              <div className="side-menu-section-content">
                <p className="side-menu-section-placeholder">Изображения...</p>
              </div>
            )}
          </div>

          {/* Завершить бой */}
          {isCombatMode && (
            <button className="side-menu-item full-width danger" onClick={() => { onClose(); onEndCombat(); }}>
              <span>⚔️ Завершить бой</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideMenu
