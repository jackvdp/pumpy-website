import React from 'react';
import styles from './Artwork.module.css';
import Image from 'next/image';

export default function Artwork({ currentTrack, isPlaying, showControls, handleArtworkClick }) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={(isLoaded ? ` ${styles.artworkContainer}` : ` ${styles.hidden}`)} onClick={handleArtworkClick}>
            <Image
                src={currentTrack.picture}
                alt={`${currentTrack.title} Artwork`}
                width={100}
                height={100}
                className={styles.artwork + (isLoaded ? `` : ` ${styles.hidden}`)}
                draggable="false"
                onLoadingComplete={handleImageLoad}
            />
            <div className={(isPlaying && !showControls) ? ` ${styles.hidden}` : ''}>
                <span className={styles.icon}>
                    <i className={"fa-solid " + (isPlaying ? "fa-pause" : "fa-play")}></i>
                </span>
            </div>
            <Image
                src="/imagesNew/vinyl.webp"
                alt="Vinyl"
                width={90}
                height={90}
                className={`${styles.vinyl} ${styles.spin} ${isPlaying && styles.expose}`}
                draggable="false"
            />
        </div>
    )
}