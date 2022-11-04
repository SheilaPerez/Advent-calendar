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
            <h1>Christmas guest list</h1>
            <div className={styles.guestListContent}>
                {guestsList.map((guest) => {
                    return (
                        <ul>
                            <li>{guest.name}</li>
                        </ul>
                    )
                })}
            </div>
            <p>New guest:</p>
            <input type="text" value={guest} onChange={(e) => handleChangeAddGuest(e)}></input>
            <button type="button" onClick={handleClickAddGuest}>Add 'em</button>
        </div>
    )
};

export default GuestList;