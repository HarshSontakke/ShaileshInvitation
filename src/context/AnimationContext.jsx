import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';

const AnimationContext = createContext({
  heroReady: false,
  animationsComplete: false,
  signalHeroReady: () => {},
  signalAnimationsComplete: () => {}
});

export function useAnimation() {
  return useContext(AnimationContext);
}

export function AnimationProvider({ children }) {
  const [heroReady, setHeroReady] = useState(false);
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const isLockedRef = useRef(false);

  const signalHeroReady = useCallback(() => {
    setHeroReady(true);
  }, []);

  const signalAnimationsComplete = useCallback(() => {
    setAnimationsComplete(true);
  }, []);

  // Prevent background scrolling while curtain is closed / animating
  useEffect(() => {
    if (animationsComplete) {
      isLockedRef.current = false;
      return;
    }
    isLockedRef.current = true;

    const preventScroll = (e) => {
      if (isLockedRef.current) {
        e.preventDefault();
      }
    };

    const preventKeys = (e) => {
      if (!isLockedRef.current) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', ' ', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeys, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeys);
    };
  }, [animationsComplete]);

  return (
    <AnimationContext.Provider
      value={{
        heroReady,
        animationsComplete,
        signalHeroReady,
        signalAnimationsComplete
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationContext;
