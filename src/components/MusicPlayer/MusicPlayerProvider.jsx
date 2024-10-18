"use client";

import React, { createContext, useState, useEffect } from 'react';
import tracksData from '@/data/tracks.json';
import { shuffleArray } from '@/utils/shuffle';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/soundcloud'), { ssr: false });

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    useEffect(() => {
        setPlaylist(shuffleArray(tracksData));
    }, []);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
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
                isPlaying,
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
                    playing={isPlaying}
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