"use client";

import React, { useContext, useEffect, useState } from 'react';
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

    const [showControls, setShowControls] = useState(false);

    const handleArtworkClick = () => {
        setShowControls(prev => !prev);
    };

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
            {currentTrack.picture && (
                <div className={styles.artworkContainer} onClick={handleArtworkClick}>
                    <img
                        src={currentTrack.picture}
                        alt={`${currentTrack.title} Artwork`}
                        className={styles.artwork}
                    />
                    <img
                        src="/imagesNew/vinyl.png"
                        alt="Vinyl"
                        className={`${styles.vinyl} ${styles.spin} ${isPlaying && styles.expose}`}
                    />
                </div>
            )}

            <div className={`${styles.controlsContainer} ${showControls ? styles.show : ''}`}>
                <div className={styles.controls}>
                    <button
                        onClick={togglePlay}
                        className={styles.controlButton}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                    </button>

                    <button
                        onClick={nextTrack}
                        className={styles.controlButton}
                        aria-label="Next Track"
                    >
                        <i className="bi bi-skip-forward-fill"></i>
                    </button>
                </div>

                <div className={styles.trackInfo}>
                    <span className={styles.title}>{currentTrack.title || 'No Track'}</span>
                    <span className={styles.artist}>{currentTrack.artist || 'Unknown Artist'}</span>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;