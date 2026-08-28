import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { getAsset } from '../assets/assets';

const MusicContext = createContext({
  isPlaying: false,
  startMusic: () => {},
  toggleMusic: () => {}
});

export function useMusic() {
  return useContext(MusicContext);
}

const FADE_DURATION = 800;
const FADE_STEPS = 20;
const TARGET_VOLUME = 0.45;

export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const musicSrc = getAsset('bgMusic');
      const audio = new Audio(musicSrc);
      audio.loop = true;
      audio.volume = 0;
      audio.preload = 'auto';
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const clearFade = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  const fadeIn = useCallback((audio) => {
    clearFade();
    let currentVol = audio.volume;
    const volStep = TARGET_VOLUME / FADE_STEPS;
    const intervalTime = FADE_DURATION / FADE_STEPS;

    fadeIntervalRef.current = setInterval(() => {
      currentVol = Math.min(currentVol + volStep, TARGET_VOLUME);
      audio.volume = currentVol;
      if (currentVol >= TARGET_VOLUME) {
        clearFade();
      }
    }, intervalTime);
  }, [clearFade]);

  const fadeOut = useCallback((audio) => {
    clearFade();
    let currentVol = audio.volume;
    const volStep = currentVol / FADE_STEPS;
    const intervalTime = FADE_DURATION / FADE_STEPS;

    fadeIntervalRef.current = setInterval(() => {
      currentVol = Math.max(currentVol - volStep, 0);
      audio.volume = currentVol;
      if (currentVol <= 0) {
        clearFade();
        audio.pause();
      }
    }, intervalTime);
  }, [clearFade]);

  const startMusic = useCallback(() => {
    const audio = getAudio();
    audio.volume = 0;
    audio.play().then(() => {
      setIsPlaying(true);
      fadeIn(audio);
    }).catch(() => {
      // Browser autoplay policies might block without user interaction
    });
  }, [getAudio, fadeIn]);

  const toggleMusic = useCallback(() => {
    const audio = getAudio();
    if (isPlaying) {
      setIsPlaying(false);
      fadeOut(audio);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        fadeIn(audio);
      }).catch(() => {});
    }
  }, [getAudio, isPlaying, fadeIn, fadeOut]);

  useEffect(() => {
    return () => {
      clearFade();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [clearFade]);

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        startMusic,
        toggleMusic
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export default MusicContext;
