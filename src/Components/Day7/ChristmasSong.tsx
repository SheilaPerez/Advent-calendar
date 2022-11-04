import styles from './ChristmasSong.module.css';

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
        <div>
            <h1>Jingle Rocks!!</h1>
            <audio id="player">
                <source src="Jingle.mp3" type="audio/mp3"/>
            </audio>
            <div>
                <button type="button" onClick={handlePlay}>Play</button>
                <button type="button" onClick={handlePause}>Pause</button>
            </div>
        </div>
    )
};

export default ChristmasSong; 