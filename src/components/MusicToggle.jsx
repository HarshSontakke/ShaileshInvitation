import React from 'react';
import { useMusic } from '../context/MusicContext';

export function MusicToggle() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <button
      aria-label={isPlaying ? 'Mute devotional music' : 'Play devotional music'}
      aria-pressed={isPlaying}
      className={`music-toggle${isPlaying ? ' music-toggle--on' : ''}`}
      onClick={toggleMusic}
      type="button"
    >
      <span className="music-toggle__icon">
        {isPlaying ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3z" />
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73zM14 7h4V3h-6v5.18l2 2z" />
          </svg>
        )}
      </span>
    </button>
  );
}

export default MusicToggle;
