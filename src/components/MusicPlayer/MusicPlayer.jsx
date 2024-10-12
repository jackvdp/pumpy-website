// src/components/MusicPlayer.js

'use client';

import React, { useContext } from 'react';
import { MusicPlayerContext } from './MusicPlayerProvider';
import ReactPlayer from 'react-player/soundcloud';
import styles from './MusicPlayer.module.css'; // Create this CSS module for styling

const MusicPlayer = () => {
    const {
        isPlaying,
        togglePlay,
    } = useContext(MusicPlayerContext);

    return (
        <div className={styles.playerContainer}>
            <div className={styles.controls}>
                <button onClick={togglePlay} className={styles.playPauseButton}>
                    {isPlaying ? '❚❚ Pause' : '▶️ Play'}
                </button>
            </div>
        </div>
    );
};

export default MusicPlayer;