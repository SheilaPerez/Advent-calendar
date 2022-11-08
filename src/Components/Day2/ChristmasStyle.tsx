import {useState } from 'react';
import styles from './ChristmasStyle.module.css';

const ChristmasStyle = () => {
    const [decorationChange, setDecorationChange] = useState<string>('');

    const handleChangeDecoration = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDecorationChange(e.target.value)
    }
    return (
        <div className={styles.content}>
            <div>
                <div>
                    {decorationChange === "christmas" ?
                        <div className={styles.christmasContent}>
                            <h1 className={styles.christmas}>Merry christmas</h1>
                            <div className={styles.christmasIcon}></div>
                        </div>
                        : decorationChange === "snow" ?
                        <div className={styles.snowContent}>
                                <h1 className={styles.snow}>Let it snow</h1>
                                <div className={styles.snowIcon}></div>
                        </div>
                        : <p className={styles.title}>What do you want?</p>}

                </div>
                <div>
                    <input type="radio" value="christmas" name="changeDecoration" onChange={(e) => handleChangeDecoration(e)}></input>
                    <label className={styles.christmasInput} >Christmas</label>
                    <input type="radio" value="snow" name="changeDecoration" onChange={(e) => handleChangeDecoration(e)}></input>
                    <label className={styles.snowInput}>Snow</label>
                </div>
            </div>
        </div>
    )
};

export default ChristmasStyle;