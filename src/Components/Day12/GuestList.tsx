import React, { useState } from 'react';
import styles from './GuestList.module.css';
interface Guests {
    name: string;
}

const GuestList = () => {
    const [guest, setGuest] = useState<string>('');
    const [guestsList, setGuestList] = useState<Guests[]>([]);

    const handleChangeAddGuest = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuest(e.target.value);
    }

    const handleClickAddGuest = () => {
        setGuestList([...guestsList, {
            name: guest
        }]);
        setGuest('');
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Christmas guest list</h1>
            <div className={styles.guestListContent}>
                {guestsList.map((guest) => {
                    return (
                        <p className={styles.names}>{guest.name}</p>
                    )
                })}
            </div>
            <div className={styles.addNameContent}>
                <p className={styles.newGuest}>New guest:</p>
                <input type="text" value={guest} onChange={(e) => handleChangeAddGuest(e)}></input>
                <button type="button" className={styles.button} onClick={handleClickAddGuest}>Add 'em</button>
            </div>   
        </div>
    )
};

export default GuestList;