import { useState } from 'react';
import { getRandomNum } from '../../helpers/getRandomNum';
import styles from './DinnerCalculator.module.css';

const DinnerCalculator = () => {
    const meals = ["Turkey", "Goose", "Chicken"]
    const vegetarianMeals = ["Nut roast", "Squash & chestnut crackers", "Mini nut roasts with candied carrots"]
    const [checkedVegetarian, setCheckedVegetarian] = useState<Boolean>();
    const [mealSelected, setMealSelected] = useState<string>("");

    const handleChangeVegetarian = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedVegetarian(e.target.checked);
    }

    const handleClickCalculate = () => {
        let numRandom = getRandomNum(0, 3);
        if (checkedVegetarian) {
            const foundMeal = vegetarianMeals.filter((meal: string, index: number) => {
                return numRandom === index;
            })[0];
            setMealSelected(foundMeal);
        } else {
            const foundMeal = meals.filter((meal: string, index: number) => {
                return numRandom === index;
            })[0]
            setMealSelected(foundMeal);
        }
    }

    return (
            <div className={styles.content}>
                <h1 className={styles.title}>Christmas dinner</h1>
                <div>
                    <h3 className={styles.subtitle}>Your ideal Christmas dinner is...</h3>
                    <p className={styles.answer}>{mealSelected}</p>
                </div>
                <div>
                    <p className={styles.question}>Any vegetarian?</p>
                    <input type="checkbox" onChange={(e) => handleChangeVegetarian(e)}></input>
                </div>
                <button className={styles.button} type="button" onClick={handleClickCalculate}>Calculate</button>
            </div>
    )
};

export default DinnerCalculator;