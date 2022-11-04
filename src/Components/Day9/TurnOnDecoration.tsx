import { useState } from 'react';
import styles from './TurnOnDecoration.module.css';

const TurnOnDecoration = () => {
    const [checked, setChecked] = useState<Boolean>();

    const handleClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    return (
        <div>
            <p>Turn on Christmas decoration!</p>
            <div>
                <input type="checkbox" onChange={(e) => handleClickCheckbox(e)}></input>   
            </div>
            <div className={styles.imagesContent}>
                {checked && <div className={styles.decorationContent}>
                                <div className={styles.lightone}></div>
                                <div className={styles.tree}></div>
                            </div>}
                <div className={styles.home}></div>
                {checked && <div className={styles.decorationContent}>
                                <div className={styles.lightthree}></div>
                                <div className={styles.lighttwo}></div>
                            </div>}
            </div>

        </div>
    )
}

export default TurnOnDecoration;

