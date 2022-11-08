import React, { useState } from 'react';
import styles from './FestiveTranslator.module.css';

const FestiveTranslator = () => {
    const [elementSelected, setElementSelected] = useState<string>('');
    
    const handlechangeLenguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setElementSelected(e.target.value);
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Festive Translator</h1>
            <div className={styles.lenguagesContainer}>
                <div className={styles.lenguagesContent}>
                    {elementSelected === "english" ? <p className={styles.text}>"Merry Christmas"</p> :
                        elementSelected === "spanish" ? <p className={styles.text}>"Feliz navidad"</p> :
                            elementSelected === "catalan" ? <p className={styles.text}>"Bon nadal"</p> : 
                                elementSelected === "french" ? <p className={styles.text}>"Joyeux Noël"</p> : 
                                    <div className={styles.lenguagesEmptyContent}></div>
                    }
                </div>
                <select onChange={(e) => handlechangeLenguage(e)}>
                    <option>Lenguages</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="catalan">Catalan</option>
                    <option value="french">French</option>
                </select>
            </div>
        </div>
    )
};

export default FestiveTranslator;