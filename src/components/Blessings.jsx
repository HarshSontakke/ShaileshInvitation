import React, { useState, useRef, useCallback, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { invitationData } from '../data/invitationData';
import { AssetImage, AssetDivider } from './AssetImage';

// Deterministic pseudorandom helper for sacred dust particle positioning
function pseudoRandom(a, b) {
  const val = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return val - Math.floor(val);
}

function useDustParticles({ count, delayRange, durationRange, minDuration }) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, idx) => ({
        animationDelay: `${pseudoRandom(idx, 1) * delayRange}s`,
        animationDuration: `${minDuration + pseudoRandom(idx, 2) * durationRange}s`,
        left: `${pseudoRandom(idx, 3) * 100}%`,
        top: `${pseudoRandom(idx, 4) * 100}%`
      })),
    [count, delayRange, durationRange, minDuration]
  );
}

function useFlowerOffering(containerRef) {
  const [isMurtiActive, setIsMurtiActive] = useState(false);
  const totalOfferedRef = useRef(0);

  const spawnPetal = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const petal = document.createElement('div');
    petal.classList.add('petal');

    const side = Math.random() > 0.5 ? 'left' : 'right';
    const dir = side === 'left' ? 1 : -1;
    const h = container.offsetHeight || 500;
    const startX = side === 'left' ? -50 : window.innerWidth + 50;
    const startY = h * 0.4 + Math.random() * (h * 0.2);

    petal.style.left = `${startX}px`;
    petal.style.top = `${startY}px`;

    const size = 15 + Math.random() * 20;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    container.appendChild(petal);

    const targetPerc = 30 + Math.random() * 40;
    const targetX = (window.innerWidth * targetPerc) / 100 - startX;
    const targetY = h - startY + 50;
    const rot = 360 + Math.random() * 720;
    const duration = 2500 + Math.random() * 1500;
    const apex = 0.2 + Math.random() * 0.15;
    const quadA = targetY / (1 - 2 * apex);
    const quadB = -2 * quadA * apex;
    const steps = 30;
    const scaleFactor = 0.2 + Math.random() * 0.4;
    const keyframes = [];

    for (let p = 0; p <= steps; p += 1) {
      const prog = p / steps;
      const x = targetX * prog;
      const y = quadA * prog * prog + quadB * prog;
      const r = rot * prog;
      const s = 0.5 + Math.sin(prog * Math.PI) * scaleFactor;
      let opacity = 1;
      if (prog < 0.08) opacity = prog * 12.5;
      if (prog > 0.4) opacity = 1 - (prog - 0.4) / 0.6;

      keyframes.push({
        offset: prog,
        opacity,
        transform: `translate(${x}px, ${y}px) rotate(${dir * r}deg) scale(${s})`
      });
    }

    petal.animate(keyframes, { duration, easing: 'linear', fill: 'forwards' });
    window.setTimeout(() => {
      petal.remove();
    }, duration);
  }, [containerRef]);

  const offerFlowers = useCallback(() => {
    setIsMurtiActive(true);
    window.setTimeout(() => {
      setIsMurtiActive(false);
    }, 700);

    const count = totalOfferedRef.current > 35 ? 8 : 18;
    totalOfferedRef.current += count;
    for (let i = 0; i < count; i += 1) {
      spawnPetal();
    }
  }, [spawnPetal]);

  return { isMurtiActive, offerFlowers };
}

export function Blessings() {
  const { blessings } = invitationData;
  const { assets, buttonText, dust, heading, note, subtitle } = blessings;

  const containerRef = useRef(null);
  const dustParticles = useDustParticles(dust);
  const { isMurtiActive, offerFlowers } = useFlowerOffering(containerRef);
  const revealRef = useScrollReveal();

  const setCombinedRef = useCallback(
    (node) => {
      containerRef.current = node;
      revealRef.current = node;
    },
    [revealRef]
  );

  return (
    <section className="ashirwad-section scroll-reveal" ref={setCombinedRef}>
      <div className="royal-frame" />
      <AssetDivider assetKey={assets.divider} className="ashirwad-divider scroll-reveal-child" />
      <h2 className="ashirwad-heading scroll-reveal-child">{heading}</h2>
      <p className="ashirwad-subtitle scroll-reveal-child">{subtitle}</p>

      <div className="ashirwad-stage scroll-reveal-child">
        <AssetImage assetKey={assets.murti} className="murti-bg" alt="" />
        <div className="murti-aura" />
        <AssetImage
          assetKey={assets.murti}
          className={`murti-main${isMurtiActive ? ' active' : ''}`}
          alt="Shree Ganesha Blessings"
        />
        <div className="floating-particles" />
        <div className="sacred-dust">
          {dustParticles.map((style, idx) => (
            <span style={style} key={`${style.left}-${idx}`} />
          ))}
        </div>
      </div>

      <p className="tap-note scroll-reveal-child">{note}</p>
      <button
        className="flower-btn scroll-reveal-child"
        onClick={offerFlowers}
        type="button"
      >
        {buttonText}
      </button>
    </section>
  );
}

export default Blessings;
