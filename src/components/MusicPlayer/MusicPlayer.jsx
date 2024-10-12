"use client";

import React, { useContext, useEffect } from 'react';
import { MusicPlayerContext } from './MusicPlayerProvider';
import styles from './MusicPlayer.module.css';

const MusicPlayer = () => {
    const {
        isPlaying,
        togglePlay,
        nextTrack,
        prevTrack,
        playlist,
        currentTrackIndex
    } = useContext(MusicPlayerContext);

    const currentTrack = playlist[currentTrackIndex] || {};

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'ArrowRight':
                    nextTrack();
                    break;
                case 'ArrowLeft':
                    prevTrack();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [togglePlay, nextTrack, prevTrack]);

    return (
        <div className={styles.playerContainer}>
            <div className={styles.controls}>

                <button onClick={togglePlay} className={styles.playPauseButton} aria-label={isPlaying ? 'Pause' : 'Play'}>
                    {isPlaying ? '❚❚' : '▶️'}
                </button>

                <button onClick={nextTrack} className={styles.nextButton} aria-label="Next Track">
                    ⏭️
                </button>

                {/* Track Information */}
                <div className={styles.trackInfo}>
                    {currentTrack.picture && (
                        <img src={currentTrack.picture} alt={`${currentTrack.title} Artwork`} className={styles.artwork} />
                    )}
                    <div>
                        <span className={styles.title}>{currentTrack.title || 'No Track'}</span>
                        <span className={styles.artist}>{currentTrack.artist || 'Unknown Artist'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;