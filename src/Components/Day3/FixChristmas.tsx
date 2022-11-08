import { useState } from 'react';
import styles from './FixChristmas.module.css';

const FixChristmas = () => {
    const [fixClicked, setFixClicked] = useState<Boolean>(false);
    
    const handleClickFix = () => {
        setFixClicked(!fixClicked);
    }

    const stopPropagation = (e:any) => {
        e.stopPropagation();
    }
    return (
            <div className={styles.content}>
                {fixClicked ?
                    <div className={styles.fixed}>
                        <h1 className={styles.titleFixed}>Merry Christmas</h1>
                        <button type="button" className={styles.fixedBtn} onClick={handleClickFix}>FIXED!</button>
                    </div> :
                    <div className={styles.fix}>
                        <h1 className={styles.title}>Merry Christmas</h1>
                        <button type="button" className={styles.fixBtn} onClick={handleClickFix}>FIX</button>
                    </div>
                } 
            </div>
    )
};

export default FixChristmas;