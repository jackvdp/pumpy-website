"use client";

import React, { createContext, useState, useRef, useEffect } from 'react';
import tracksData from '@/data/tracks.json';
import { shuffleArray } from '@/utils/shuffle';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/soundcloud'), { ssr: false });

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const playerRef = useRef(null);

    useEffect(() => {
        const shuffledPlaylist = shuffleArray(tracksData);
        setPlaylist(shuffledPlaylist);
    }, []);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    const nextTrack = () => {
        if (isShuffling) {
            const randomIndex = Math.floor(Math.random() * playlist.length);
            setCurrentTrackIndex(randomIndex);
        } else {
            setCurrentTrackIndex((prevIndex) =>
                prevIndex < playlist.length - 1 ? prevIndex + 1 : 0
            );
        }
    };

    const prevTrack = () => {
        if (isShuffling) {
            const randomIndex = Math.floor(Math.random() * playlist.length);
            setCurrentTrackIndex(randomIndex);
        } else {
            setCurrentTrackIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : playlist.length - 1
            );
        }
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
            <ReactPlayer
                ref={playerRef}
                url={currentTrack.trackLink}
                playing={isPlaying}
                onEnded={handleEnded}
                controls={false}
                style={{ display: 'none' }}
            />
            {children}
        </MusicPlayerContext.Provider>
    );
};