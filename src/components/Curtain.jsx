import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';
import { getAsset } from '../assets/assets';

const CURTAIN_EASING = [0.76, 0, 0.24, 1];

export function Curtain({ onOpenStart, onComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { signalHeroReady, signalAnimationsComplete } = useAnimation();

  const mandalaSrc = getAsset('mandala');

  useEffect(() => {
    if (isVisible && !isOpening) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isVisible, isOpening]);

  const handleOpen = () => {
    setIsOpening(true);
    if (onOpenStart) onOpenStart();

    setTimeout(() => {
      signalHeroReady();
    }, 1100);

    setTimeout(() => {
      signalAnimationsComplete();
    }, 2800);

    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2500);
  };

  if (!isVisible) return null;

  return (
    <div
      className="curtain-container"
      style={{ pointerEvents: isOpening ? 'none' : 'auto' }}
      aria-hidden="true"
    >
      {/* Left Panel */}
      <motion.div
        className="curtain-panel panel-left"
        initial={{ x: 0 }}
        animate={isOpening ? { x: '-100%' } : { x: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: CURTAIN_EASING }}
      >
        <div className="curtain-panel-decor" />
        <div className="curtain-decor-line" />
        <div className="curtain-decor-outer" />
        <div className="curtain-corner curtain-corner--top" />
        <div className="curtain-corner curtain-corner--bottom" />
        <img
          src={mandalaSrc}
          alt=""
          className="curtain-mandala curtain-mandala--left"
          draggable="false"
          loading="eager"
          fetchpriority="high"
        />
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="curtain-panel panel-right"
        initial={{ x: 0 }}
        animate={isOpening ? { x: '100%' } : { x: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: CURTAIN_EASING }}
      >
        <div className="curtain-panel-decor" />
        <div className="curtain-decor-line" />
        <div className="curtain-decor-outer" />
        <div className="curtain-corner curtain-corner--top" />
        <div className="curtain-corner curtain-corner--bottom" />
        <img
          src={mandalaSrc}
          alt=""
          className="curtain-mandala curtain-mandala--right"
          draggable="false"
          loading="eager"
          fetchpriority="high"
        />
      </motion.div>

      {/* Center Seal Button */}
      <motion.div
        className="curtain-center-content"
        initial={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
        animate={
          isOpening
            ? { opacity: 0, scale: 0.85, x: '-50%', y: '-50%' }
            : { opacity: 1, scale: 1, x: '-50%', y: '-50%' }
        }
        transition={
          isOpening ? { duration: 0.5, ease: 'easeIn' } : { duration: 0 }
        }
      >
        <div className="curtain-seal-ring" />
        <div className="curtain-seal-ring-inner" />
        <button
          className="curtain-seal"
          onClick={handleOpen}
          type="button"
          aria-label="श्री गणेशाय नमः - Tap To Open"
        >
          <span className="curtain-seal-text-hi">श्री गणेशाय नमः</span>
          <span className="curtain-seal-divider">
            <svg
              width="24"
              height="8"
              viewBox="0 0 24 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0L14 3.5H24L15.5 5L12 8L8.5 5L0 3.5H10L12 0Z"
                fill="#8D5A18"
                opacity="0.6"
              />
            </svg>
          </span>
          <span className="curtain-seal-text-en">Tap To Open</span>
          <span className="curtain-seal-shine" />
        </button>
      </motion.div>
    </div>
  );
}

export default Curtain;
