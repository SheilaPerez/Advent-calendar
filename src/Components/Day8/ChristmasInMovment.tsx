import { useState } from 'react';
import styles from './ChristmasInMovment.module.css';

const ChristmasInMovment = () => {
    const [play, setPlay] = useState<Boolean>(false);

    const handlePlay = () => {
        setPlay(true);
        const play = document.getElementById('player') as HTMLVideoElement;
        if (play != null) {
            play.play()
        }
    }

    const handlePause = () => {
        const pause = document.getElementById('player') as HTMLVideoElement;
        setPlay(false)
        if (pause != null) {
            pause.pause()
        }
    }

    return (
        <div className={styles.content}>
            <h1>Jingle Rocks!!</h1>
            <audio id="player">
                <source src="Jingle.mp3" type="audio/mp3" />
            </audio>
            <div className={styles.iconsContent}>
                <div className={`${styles.elf} ${play ? `${styles.iconAnimtaion}` : ""}`}></div>
                <div className={`${styles.cookie} ${play ? `${styles.iconAnimtaion}` : ""}`}></div>
                <div className={`${styles.snowman} ${play ? `${styles.iconAnimtaion}` : ""}`}></div>
            </div>
            <div>
                <button type="button" onClick={handlePlay}>Play</button>
                <button type="button" onClick={handlePause}>Pause</button>
            </div>
        </div>
    )
}

export default ChristmasInMovment;

