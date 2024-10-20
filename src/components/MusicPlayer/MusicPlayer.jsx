"use client";

import React, { useContext, useEffect, useState } from 'react';
import { MusicPlayerContext } from './MusicPlayerProvider';
import styles from './MusicPlayer.module.css';
import Artwork from './Artwork';
import Controls from './Controls';

const MusicPlayer = () => {
    const {
        playerState,
        togglePlay,
        nextTrack,
        prevTrack,
        playlist,
        currentTrackIndex
    } = useContext(MusicPlayerContext);

    const isPlaying = playerState === 'playing';

    const currentTrack = playlist[currentTrackIndex] || {};

    const [showControls, setShowControls] = useState(false);

    const handleArtworkClick = () => {
        if (playerState === 'stopped') {
            togglePlay();
        } 
    };

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
                <Artwork currentTrack={currentTrack} isPlaying={isPlaying} handleArtworkClick={handleArtworkClick} />
            )}

            <Controls
                showControls={showControls}
                togglePlay={togglePlay}
                isPlaying={isPlaying}
                nextTrack={nextTrack}
                prevTrack={prevTrack}
                currentTrack={currentTrack}
            />
        </div>
    );
};

export default MusicPlayer;