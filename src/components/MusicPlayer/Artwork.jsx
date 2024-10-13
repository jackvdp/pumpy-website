import styles from './Artwork.module.css';

export default function Artwork({currentTrack, isPlaying, handleArtworkClick}) {
    return (
        <div className={styles.artworkContainer} onClick={handleArtworkClick}>
            <img
                src={currentTrack.picture}
                alt={`${currentTrack.title} Artwork`}
                className={styles.artwork}
            />
            <img
                src="/imagesNew/vinyl.png"
                alt="Vinyl"
                className={`${styles.vinyl} ${styles.spin} ${isPlaying && styles.expose}`}
            />
        </div>
    )
}