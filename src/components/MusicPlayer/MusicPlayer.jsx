'use client';

import React from 'react';
import { useMusicPlayer } from './MusicPlayerProvider';
import styles from './MusicPlayer.module.css';

const MusicPlayer = () => {
    const {
        isPlaying,
        togglePlay,
    } = useMusicPlayer();

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