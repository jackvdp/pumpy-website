"use client";

import React from 'react';
import styles from './Controls.module.css';

export default function Controls({ showControls, togglePlay, isPlaying, nextTrack, prevTrack, currentTrack }) {
    return (
        <div className={`${styles.controlsContainer} ${showControls ? styles.show : ''} ${isPlaying && styles.expose}`}>

            <div className={styles.trackInfo}>
                <span className={styles.title}>{currentTrack.title || 'No Track'}</span>
                <span className={styles.artist}>{currentTrack.artist || 'Unknown Artist'}</span>
            </div>

            <div className={styles.controls}>
                <button
                    onClick={prevTrack}
                    className={`${styles.controlButton} ${styles.small}`}
                    aria-label="Previous Track"
                >
                    <i className="bi bi-rewind-fill"></i>
                </button>

                <button
                    onClick={togglePlay}
                    className={styles.controlButton}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} ${styles.alignBottomOfContainer}`}></i>
                </button>

                <button
                    onClick={nextTrack}
                    className={`${styles.controlButton} ${styles.small}`}
                    aria-label="Next Track"
                >
                    <i className="bi bi-fast-forward-fill"></i>
                </button>
            </div>
        </div>
    );
}