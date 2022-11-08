import { useState } from 'react';
import styles from './LonelyElf.module.css';

const LonelyElf = () => {
    const elf = "elfo.png";
    const [elfs, setElfs] = useState(["elfo.png"]);

    const handleClickDuplicate = () => {
        setElfs([...elfs, elf]);
    }

    const handleClickLonely = () => {
        setElfs(["elfo.png"]);
    }

    return (
            <div className={styles.content}>
                <h1 className={styles.title}>Lonely Elf</h1>
                <div>
                    {elfs.map((elf) => {
                        return (
                            <img src={elf} className={styles.elf}></img>
                        )
                    })}
                </div>
                <button type="button" className={styles.duplicate} onClick={handleClickDuplicate}>Duplicate elf!</button>
                <button type="button" className={styles.lonely} onClick={handleClickLonely}>Lonely again...</button>
            </div>
    )
};

export default LonelyElf;