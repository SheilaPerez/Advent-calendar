import { useState } from 'react';
import styles from './SleighLaunch.module.css';

const SleighLaunch  = () => {
    const [launchClicked, setLaunchClicked] = useState<Boolean>(false);
    
    return (
            <div className={styles.content}>
                <h1 className={styles.title}>Santa's Sleigh Launch</h1>
                <div className={styles.animationContent}>
                    <div className={`${launchClicked ? styles.animation : ''}`}>
                        <div>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                            <img src={"reno.png"} className={styles.icons}></img>
                        </div>
                        <div>
                            <img src={"trineo.png"} className={styles.icons}></img>
                        </div>
                    </div>
                </div>
                <button type="button" className={styles.launchBtn} onClick={() => setLaunchClicked(!launchClicked)}>Launch! and come back</button>
            </div>
    )
}

export default SleighLaunch;