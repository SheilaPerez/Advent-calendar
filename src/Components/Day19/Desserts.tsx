import { useState } from 'react';
import { getRandomNum } from '../../helpers/getRandomNum';
import styles from './Desserts.module.css';

const Desserts = () => {
    const desserts = ["dessert1.jpeg", "dessert2.jpeg", "dessert3.jpeg", "dessert4.jpeg"];
    const [dessertFounded, setDessertFounded] = useState<string[]>([]);
    
    
    const handleClickDesserts = () => {
        const randomNum = getRandomNum(0, 3);

        setDessertFounded(
            desserts.filter((dessert:string, index:number) => {
                return randomNum === index;
            })
        )
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Dessert decider</h1>
            <button type="button" className={styles.button} onClick={handleClickDesserts}>See delicious desserts</button>
            <div>
                {dessertFounded.map((dessert) => {
                    return (
                        <img src={dessert}></img>
                    )
                })}
            </div>  
        </div>
    )
};
export default Desserts;