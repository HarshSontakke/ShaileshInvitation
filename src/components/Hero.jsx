import React from 'react';
import { useAnimation } from '../context/AnimationContext';
import { invitationData } from '../data/invitationData';
import { AssetImage, AssetDivider } from './AssetImage';
import MusicToggle from './MusicToggle';

export function Hero() {
  const { hero } = invitationData;
  const { assets, heading, invitation, shlok, subtitle } = hero;
  const { heroReady } = useAnimation();
  const animClass = heroReady ? ' hero-animate' : '';

  const formatMessage = (msg) => {
    return Array.isArray(msg) ? msg.join(' ') : msg;
  };

  return (
    <section className="hero">
      {/* Floating Music Control */}
      <div className="music-toggle-wrapper">
        <MusicToggle />
      </div>

      {/* Temple Archway Elements */}
      <AssetImage
        assetKey={assets.topLayer}
        className={`toplayer hero-anim-toplayer${animClass}`}
        loading="eager"
        fetchpriority="high"
        alt="Temple Garland Arch"
      />
      <AssetImage
        assetKey={assets.pillar}
        className={`pillar left hero-anim-pillar-left${animClass}`}
        loading="eager"
        fetchpriority="high"
        alt="Left Pillar"
      />
      <AssetImage
        assetKey={assets.pillar}
        className={`pillar right hero-anim-pillar-right${animClass}`}
        loading="eager"
        fetchpriority="high"
        alt="Right Pillar"
      />
      <AssetImage
        assetKey={assets.bell}
        className={`bell bell-left hero-anim-bell${animClass}`}
        loading="eager"
        fetchpriority="high"
        alt="Temple Bell"
      />
      <AssetImage
        assetKey={assets.bell}
        className={`bell bell-right hero-anim-bell${animClass}`}
        loading="eager"
        fetchpriority="high"
        alt="Temple Bell"
      />

      {/* Main Content */}
      <div className={`hero-content hero-anim-text-1${animClass}`}>
        <AssetImage
          assetKey={assets.logo}
          className="logo"
          loading="eager"
          fetchpriority="high"
          alt="Shree Ganesha Logo"
        />

        <p className={`shlok hero-anim-text-2${animClass}`}>
          {shlok}
        </p>

        <h1 className={`title hero-anim-text-3${animClass}`}>
          {heading.map((line, idx) => (
            <span key={line}>
              {line}
              {idx < heading.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className={`subtitle hero-anim-text-4${animClass}`}>
          {subtitle}
        </p>

        {/* Central Murti Shrine */}
        <div className={`hero-shrine hero-anim-murti${animClass}`}>
          <AssetImage
            assetKey={assets.murti}
            className="murti"
            loading="eager"
            fetchpriority="high"
            alt="Ganpati Bappa Murti"
          />
        </div>
      </div>

      {/* Family Inviter Seal Strip */}
      <section className={`family-strip hero-anim-text-5${animClass}`}>
        <AssetDivider assetKey={assets.divider} className="family-divider" />
        <div className="inviter-seal">
          <p className="seal-text">{invitation.tag}</p>
          <h2 className="seal-family-name">{invitation.familyName}</h2>
          <p className="seal-message">{formatMessage(invitation.message)}</p>
        </div>
        <AssetDivider assetKey={assets.divider} className="family-divider" />
      </section>

      {/* Bottom Shape Divider */}
      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="shape-fill"
            d="M0,120 L0,0 Q600,240 1200,0 L1200,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
