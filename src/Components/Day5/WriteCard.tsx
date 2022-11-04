import { useState } from "react";
import styles from './WriteCard.module.css';

interface Letter {
    text: string;
}
const WriteCard = () => {
    const letters: Letter[] = [{
        text: "Ho, ho, ho! Merry Christmas!",
    }, {
        text: "Happy holidays!",
    }, {
        text: "Jingle all the way!",
    }, {
        text: "We wish you a Merry Christmas",
    }];
    const [letterSelected, setLetterSelected] = useState<Letter>({text: ''});

    const random = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClickWriteCard = () => {
        let numRandom = random(0, 3);
        const foundLetter = letters.filter((letter: Letter, index: number) => {
            return numRandom === index
        })[0]

        setLetterSelected(foundLetter)
        
    }

    return (
        <div className={styles.content}>
            <div className={styles.letterContent}>
                <p>{letterSelected.text}</p>
            </div>
            <button type="button" onClick={handleClickWriteCard}>Write card</button>
        </div>
    )
}

export default WriteCard