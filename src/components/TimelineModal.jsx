import React, { useEffect } from 'react';
import { invitationData } from '../data/invitationData';
import { AssetImage, AssetDivider } from './AssetImage';

export function TimelineModal({ event, isOpen, onClose }) {
  const { timeline } = invitationData;
  const { assets, modal } = timeline;

  const currentEvent = event || {};

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`utsav-modal${isOpen ? ' show' : ''}`}
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
      role="dialog"
    >
      <div className="modal-card">
        <button
          className="close-modal"
          onClick={onClose}
          type="button"
          aria-label="Close details"
        >
          {modal.closeLabel}
        </button>

        <h3 className="modal-title">{currentEvent.title || ''}</h3>
        <AssetDivider assetKey={assets.smallDivider} className="modal-divider" />

        <div className="modal-murti-wrapper">
          <div className="murti-glow" />
          <AssetImage
            assetKey={currentEvent.image}
            className="modal-murti"
            style={{ objectFit: 'contain' }}
            alt={currentEvent.title || 'Event Artwork'}
          />
        </div>

        <div className="premium-info-rows">
          <div className="info-row">
            <AssetImage assetKey={assets.rowIcon} className="row-icon-img" alt="" />
            <div className="row-text">
              <span className="row-label">{modal.labels.date}</span>
              <span className="modal-date">{currentEvent.date || ''}</span>
            </div>
          </div>

          <div className="info-row">
            <AssetImage assetKey={assets.rowIcon} className="row-icon-img" alt="" />
            <div className="row-text">
              <span className="row-label">{modal.labels.time}</span>
              <span className="modal-time">{currentEvent.time || ''}</span>
            </div>
          </div>

          <div className="info-row">
            <AssetImage assetKey={assets.rowIcon} className="row-icon-img" alt="" />
            <div className="row-text">
              <span className="row-label">{modal.labels.location}</span>
              <span className="modal-place">{currentEvent.location || ''}</span>
            </div>
          </div>
        </div>

        <div className="modal-description">
          <p className="modal-desc">{currentEvent.description || ''}</p>
        </div>

        <AssetDivider
          assetKey={assets.smallDivider}
          className="modal-divider bottom-divider"
        />
      </div>
    </div>
  );
}

export default TimelineModal;
