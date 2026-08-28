import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { invitationData } from '../data/invitationData';
import { AssetDivider } from './AssetImage';

export function Location() {
  const { location } = invitationData;
  const { address, assets, buttonText, footerMessage, googleMapsEmbed, googleMapsLink, heading, subtitle, venue } = location;
  const revealRef = useScrollReveal();

  const handleMapsClick = (e) => {
    const btn = e.currentTarget;
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      window.open(googleMapsLink, '_blank', 'noopener,noreferrer');
    }, 150);
  };

  return (
    <section className="location-section scroll-reveal" ref={revealRef}>
      {/* Top Curved Shape Divider */}
      <div className="custom-shape-divider-top-1784026445">
        <svg
          data-name="Layer 1"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="shape-fill"
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          />
        </svg>
      </div>

      <AssetDivider assetKey={assets.divider} className="location-divider scroll-reveal-child" />
      <h2 className="location-heading scroll-reveal-child">{heading}</h2>
      <p className="location-subtitle scroll-reveal-child">{subtitle}</p>

      <div className="new-location-card scroll-reveal-child">
        <div className="map-header">
          <iframe
            title={venue}
            src={googleMapsEmbed}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="location-details">
          <h3>{venue}</h3>
          <p className="address-text">{address}</p>
          <a
            className="new-maps-btn"
            href={googleMapsLink}
            onClick={handleMapsClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </a>
          <p className="footer-msg">
            {footerMessage.map((line, idx) => (
              <span key={line}>
                {line}
                {idx < footerMessage.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <AssetDivider
        assetKey={assets.divider}
        className="location-divider bottom-divider scroll-reveal-child"
      />
    </section>
  );
}

export default Location;
