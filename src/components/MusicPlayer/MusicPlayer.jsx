// src/components/MusicPlayer.js

"use client";

import React, { useContext, useState } from 'react';
import { MusicPlayerContext } from './MusicPlayerProvider';
import styles from './MusicPlayer.module.css';

const MusicPlayer = () => {
    const {
        isPlaying,
        togglePlay,
        nextTrack,
        playlist,
        currentTrackIndex
    } = useContext(MusicPlayerContext);

    const currentTrack = playlist[currentTrackIndex] || {};

    const [showControls, setShowControls] = useState(false);

    const handleArtworkClick = () => {
        setShowControls(prev => !prev);
    };

    return (
        <div className={styles.playerContainer}>
            {/* Album Artwork */}
            {currentTrack.picture && (
                <div className={styles.artworkContainer} onClick={handleArtworkClick}>
                    <img
                        src={currentTrack.picture}
                        alt={`${currentTrack.title} Artwork`}
                        className={styles.artwork}
                    />
                    {/* Vinyl Image */}
                    <img
                        src="/imagesNew/vinyl.png"
                        alt="Vinyl"
                        className={`${styles.vinyl} ${isPlaying ? styles.spin : ''}`}
                    />
                </div>
            )}

            {/* Controls Overlay */}
            <div className={`${styles.controlsContainer} ${showControls ? styles.show : ''}`}>
                <div className={styles.controls}>
                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className={styles.controlButton}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                    </button>

                    {/* Next Track Button */}
                    <button
                        onClick={nextTrack}
                        className={styles.controlButton}
                        aria-label="Next Track"
                    >
                        <i className="bi bi-skip-forward-fill"></i>
                    </button>
                </div>

                {/* Track Information */}
                <div className={styles.trackInfo}>
                    <span className={styles.title}>{currentTrack.title || 'No Track'}</span>
                    <span className={styles.artist}>{currentTrack.artist || 'Unknown Artist'}</span>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;