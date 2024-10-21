import styles from './Artwork.module.css';
import Image from 'next/image';

export default function Artwork({ currentTrack, isPlaying, showControls, handleArtworkClick }) {
    return (
        <div className={styles.artworkContainer} onClick={handleArtworkClick}>
            <Image
                src={currentTrack.picture}
                alt={`${currentTrack.title} Artwork`}
                width={100}
                height={100}
                className={styles.artwork}
                draggable="false"
            />
            <span className={`${styles.icon} ${isPlaying && !showControls ? styles.hidden : ''}`}>
                <i className={"fa-solid " + (isPlaying ? "fa-pause" : "fa-play")}></i>
            </span>
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