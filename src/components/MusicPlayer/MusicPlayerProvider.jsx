"use client";
import React, { createContext, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/soundcloud'), { ssr: false });

export const MusicPlayerContext = createContext();
import { useContext } from 'react';

export const useMusicPlayer = () => {
    return useContext(MusicPlayerContext);
};

export const MusicPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);
    const playlistUrl = 'https://soundcloud.com/poolsuite/sets/poolsuite-fm-official-playlist';
    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                isPlaying,
                togglePlay,
                playerRef,
                playlistUrl,
            }}
        >
            <ReactPlayer
                ref={playerRef}
                url={playlistUrl}
                playing={isPlaying}
                controls={false}
                style={{ display: 'none' }}
            />
            {children}
        </MusicPlayerContext.Provider>
    );
};