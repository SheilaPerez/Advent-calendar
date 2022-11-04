import { useState } from 'react';
import styles from './Christmassifier.module.css';

const Christmassifier = () => {
    const [clicked, setClicked] = useState<Boolean>(false);
    
    return (
        <div className={`${clicked ? styles.clickedContent : styles.content}`}>
            <p className={`${clicked ? styles.clickedStyle : styles.text}`}>Merry Christmas!</p>
            <button type="button" onClick={() => setClicked(!clicked)}>{`${clicked ? "Des-Christmassify" : "Christmassify"}`}</button>
        </div>
    )
};

export default Christmassifier;
