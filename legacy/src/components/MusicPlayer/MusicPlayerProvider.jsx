"use client";

import React, { createContext, useState, useEffect } from 'react';
import tracksData from '@/data/tracks.json';
import { shuffleArray } from '@/utils/shuffle';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/soundcloud'), { ssr: false });

export const MusicPlayerContext = createContext();

export const PlayerState = Object.freeze({
    PLAYING: 'playing',
    PAUSED: 'paused',
    STOPPED: 'stopped',
});

export const MusicPlayerProvider = ({ children }) => {
    const [playerState, setPlayerState] = useState(PlayerState.STOPPED);
    const [playlist, setPlaylist] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    useEffect(() => {
        setPlaylist(shuffleArray(tracksData));
    }, []);

    const togglePlay = () => {
        setPlayerState((prevState) => {
            if (prevState === PlayerState.PLAYING) {
                return PlayerState.PAUSED;
            } else {
                return PlayerState.PLAYING;
            }
        })
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex < playlist.length - 1 ? prevIndex + 1 : 0
        );
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : playlist.length - 1
        );
    };

    const handleEnded = () => {
        nextTrack();
    };

    const currentTrack = playlist[currentTrackIndex] || {};

    return (
        <MusicPlayerContext.Provider
            value={{
                playerState,
                togglePlay,
                nextTrack,
                prevTrack,
                playlist,
                currentTrackIndex,
            }}
        >
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100px',
                height: '100px',
                overflow: 'hidden',
                opacity: 0,
                pointerEvents: 'none',
                zIndex: -1000
            }}>
                <ReactPlayer
                    url={currentTrack.trackLink}
                    playing={playerState === PlayerState.PLAYING}
                    onEnded={handleEnded}
                    controls={false}
                    width="100%"
                    height="100%"
                />
            </div>
            {children}
        </MusicPlayerContext.Provider>
    );
};