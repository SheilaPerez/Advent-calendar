import { useState } from 'react';
import styles from './FixChristmas.module.css';

const FixChristmas = () => {
    const [fixClicked, setFixClicked] = useState<Boolean>(false);
    
    const handleClickFix = () => {
        setFixClicked(!fixClicked);
    }
    return (
        <div>
            <div>
                {fixClicked ?
                    <div>
                        <h1 className={styles.titleFixed}>Merry Christmas</h1>
                        <button type="button" onClick={handleClickFix}>FIXED!</button>
                    </div> :
                    <div>
                        <h1 className={styles.title}>Merry Christmas</h1>
                        <button type="button" onClick={handleClickFix}>FIX</button>
                    </div>
                } 
            </div>
        </div>
    )
};

export default FixChristmas;