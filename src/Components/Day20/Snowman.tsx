import React, {useState } from 'react';
import styles from './Snowman.module.css';

const Snownan = () => {
    const [eyesColor, setEyesColor] = useState("#9E7676");
    const [noseColor, setNoseColor] = useState("#ff5f00");
    const [buttonsColor, setButtonsColor] = useState("#FF8FB1");

    const handlechangeEyesColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEyesColor(e.target.value);
    }
    const handlechangeNoseColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNoseColor(e.target.value);
    }
    const handlechangeButtonsColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setButtonsColor(e.target.value);
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Snowman</h1>
            <div className={styles.snowmanContent}>
                <div className={styles.snowman}>
                    <div className={styles.head}>
                        <div className={styles.leftEye} style={{backgroundColor: eyesColor}}></div>
                        <div className={styles.rightEye} style={{backgroundColor: eyesColor}}></div>
                        <div className={styles.nose} style={{borderLeft: `55px solid ${noseColor}`}}></div>
                        <div className={styles.mouth}></div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.button} style={{backgroundColor: buttonsColor}}></div>
                        <div className={styles.button1} style={{backgroundColor: buttonsColor}}></div>
                        <div className={styles.button2} style={{backgroundColor: buttonsColor}}></div>
                    </div>
                </div>
                <div className={styles.colors}>
                    <div className={styles.color}>
                        <input type="color" value={eyesColor} onChange={(e) => handlechangeEyesColor(e)}></input>
                        <label>Eyes color</label>
                    </div>
                    <div className={styles.color}>
                        <input type="color" value={noseColor} onChange={(e) => handlechangeNoseColor(e)}></input>
                        <label>Nose color</label>
                    </div>
                    <div className={styles.color}>
                        <input type="color" value={buttonsColor} onChange={(e) => handlechangeButtonsColor(e)}></input>
                        <label>Buttons color</label>
                    </div>
                </div> 
            </div>
        </div>
    )
};

export default Snownan;