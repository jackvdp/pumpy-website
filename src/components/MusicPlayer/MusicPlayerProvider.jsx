"use client";
import React, { createContext, useState, useRef } from 'react';
import ReactPlayer from 'react-player/soundcloud';

export const MusicPlayerContext = createContext();

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