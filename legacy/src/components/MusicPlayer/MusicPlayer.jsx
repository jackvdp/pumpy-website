"use client";

import React, {useContext, useEffect, useState} from 'react';
import {MusicPlayerContext} from './MusicPlayerProvider';
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

    useEffect(() => {
        let timeout;
        const handleMouseEnter = () => {
            if (playerState !== 'stopped') {
                setShowControls(true);
                clearTimeout(timeout);
            }
        };

        const handleMouseLeave = () => {
            timeout = setTimeout(() => {
                setShowControls(false);
            }, 2000);
        };

        const player = document.querySelector(`.${styles.playerContainer}`);
        player.addEventListener('mouseenter', handleMouseEnter);
        player.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            player.removeEventListener('mouseenter', handleMouseEnter);
            player.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [playerState]);

    useEffect(() => {
        const player = document.querySelector(`.${styles.playerContainer}`);
        const isMouseOverPlayer = player.matches(':hover');

        if (isPlaying && isMouseOverPlayer) {
            setShowControls(true);
            if (!isMouseOverPlayer) {
                setTimeout(() => {
                    setShowControls(false);
                }, 2000);
            }
        }
    }, [isPlaying]);

    return (
        <div className={styles.playerContainer}>
            {currentTrack.picture && (
                <Artwork
                    currentTrack={currentTrack}
                    isPlaying={isPlaying}
                    showControls={showControls}
                    handleArtworkClick={togglePlay}
                />
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