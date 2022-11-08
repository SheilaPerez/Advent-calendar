import React, { useState } from 'react';
import styles from './Speedometer.module.css';

const Speedometer = () => {
    const [mph, setMph] = useState<number>(0);
    const [locationSelected, setLocationSelected] = useState<string>('');
    const [numberSelected, setnumberselected] = useState<number>(0);

    const selection = (location: string, num: number) => {
        if (location === "munich") {
            setMph(2892*num);
        }
        if (location === "sydney") {
            setMph(5458*num);
        }
        if (location === "tijuana") {
            setMph(6531*num);
        }
    }
    const handleChangeLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocationSelected(e.target.value);
        selection(e.target.value, numberSelected);
    }

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnumberselected(parseInt(e.target.value));
        selection(locationSelected, parseInt(e.target.value));
    }

    return (
            <div className={styles.content}>
                <h1 className={styles.title}>Reindeer speedometer</h1>
                <p>Current location</p>
                <select onChange={(e) => handleChangeLocation(e)}>
                    <option>Select location</option>
                    <option value="munich">Munich</option>
                    <option value="sydney">Sydney</option>
                    <option value="tijuana">Tijuana</option>
                </select>
                <p>Journey time</p>
                <input type="number" onChange={(e) => handleChangeNumber(e)}></input>
                <h3>Average reindeer speed was {mph} mph.</h3>
            </div>
    )
};

export default Speedometer;