import { useState } from 'react';
import { useInterval } from '../../Hooks/useInterval';
import styles from './StressBuster.module.css';

const StressBuster = () => {
    const [minutes, setMinutes] = useState<number>(15)
    const [seconds, setSeconds] = useState<number>(59)
    const [clicked, setClicked] = useState<Boolean>(false);
    
    const countDown = () => {
        if (clicked) {
            setSeconds((previousSeconds) => {
                if (previousSeconds === 0) {
                    setMinutes((previousMinutes) => {
                        return previousMinutes - 1;
                    })
                    return 59;
                    } else {
                    return previousSeconds - 1;
                    }
                }) 
        } else {
            setSeconds(59)
        }
    }

    useInterval(countDown, 1000)

    const handleClickStress = () => {
        setClicked(!clicked);
    }

    const stopPropagation = (e:any) => {
        e.stopPropagation();
    }

    return (
            <div className={styles.content}>
                <h1 className={styles.title}>Christmas stress buster</h1>
                <p className={styles.subtitle}>Take a moment to yourself...</p>
                <div>
                    <p className={styles.time}><span>{minutes}</span>:<span>{seconds < 10 ? <span>0{seconds}</span> :<span>{seconds}</span>}</span></p>
                </div>
            <button type="button" className={styles.button} onClick={handleClickStress}>Bus stress</button>
            </div>
    )
};

export default StressBuster;