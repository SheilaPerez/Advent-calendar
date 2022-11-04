import React, { useState } from 'react';
import styles from './DinnerCalculator.module.css';

const DinnerCalculator = () => {
    const meals = ["turkey", "goose", "chicken"]
    const vegetarianMeals = ["nut roast", "Squash & chestnut crackers", "Mini nut roasts with candied carrots"]
    const [checkedVegetarian, setCheckedVegetarian] = useState<Boolean>();
    const [mealSelected, setMealSelected] = useState<string>("");

    const handleChangeVegetarian = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedVegetarian(e.target.checked);
    }

    const handleClickCalculate = () => {
        let numRandom = getRandomIntInclusive(0, 3);
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

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    return (
        <div>
            <h1>Christmas dinner</h1>
            <div>
                <h3>Your ideal Christmas dinner is...</h3>
                <p>{mealSelected}</p>
            </div>
            <div>
                <p>Any vegetarian?</p>
                <input type="checkbox" onChange={(e) => handleChangeVegetarian(e)}></input>
            </div>
            <button type="button" onClick={handleClickCalculate}>Calculate</button>
        </div>
    )
};

export default DinnerCalculator;