import { useState } from 'react';
import styles from './Christmassifier.module.css';

const Christmassifier = () => {
    const [clicked, setClicked] = useState<Boolean>(false);

    return (
            <div className={`${clicked ? styles.clickedContent : styles.modal}`}>
                <div>
                    <p className={`${clicked ? styles.clickedStyle : styles.text}`}>Merry Christmas!</p>
                    <button type="button" className={`${clicked ? `${styles.clicked}` : `${styles.noClicked}`}`} onClick={() => setClicked(!clicked)}>{`${clicked ? "Des-Christmassify" : "Christmassify"}`}</button>
                </div>
            </div>
    )
};

export default Christmassifier;
