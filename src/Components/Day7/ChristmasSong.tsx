import styles from './ChristmasSong.module.css';
import { FaPlay, FaPause } from "react-icons/fa";

const ChristmasSong = () => {
    const handlePlay = () => {
        const play = document.getElementById('player') as HTMLVideoElement;
        if (play != null) {
            play.play()
        }
    }

    const handlePause = () => {
        const pause = document.getElementById('player') as HTMLVideoElement;
        if (pause != null) {
            pause.pause()
        }
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Jingle Rocks!!</h1>
            <div className={styles.image}></div>
            <audio id="player">
                <source src="Jingle.mp3" type="audio/mp3"/>
            </audio>
            <div>
                <button type="button" onClick={handlePlay} className={styles.radio}><FaPlay color={"#446A46"} /></button>
                <button type="button" onClick={handlePause} className={styles.radio}><FaPause color={"#E64848"} /></button>
            </div>
        </div>
    )
};

export default ChristmasSong; 