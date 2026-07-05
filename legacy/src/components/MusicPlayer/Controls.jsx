"use client";

import React from 'react';
import styles from './Controls.module.css';

export default function Controls({ showControls, isPlaying, nextTrack, currentTrack }) {
    return (
        <div className={`${styles.controlsContainer} ${showControls ? styles.show : ''} ${isPlaying && styles.expose}`}>

            <div className={styles.trackInfo}>
                <span className={styles.title}>{currentTrack.title || 'No Track'}</span>
                <span className={styles.artist}>{currentTrack.artist || 'Unknown Artist'}</span>
            </div>

            <div className={styles.controls}>
                <i onClick={nextTrack} className={`${styles.controlButton} bi bi-skip-forward-fill`}></i>
            </div>
        </div>
    );
}