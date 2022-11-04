import React, { useState } from 'react';
import styles from './ShoppingList.module.css';
import uuid from 'react-uuid';

interface List {
    name: string;
    id: string;
    check: boolean;
}
const ShoppingList = () => {
    const [present, setPresent] = useState<string>('');
    const [shoppList, setShoppList] = useState<List[]>([]);

    const handleChangeInputAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPresent(e.target.value);
    }

    const handleClickAdd = () => {
        setShoppList([...shoppList, {
            name: present,
            id: uuid(),
            check: false
        }])
    };

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setShoppList(
            shoppList.map((gift) => {
                if (gift.id === id) {
                    gift.check = e.target.checked;
                } 
                return gift;
            })
        )
    }

    return (
        <div className={styles.content}>
            <h1>Christmas shopping List</h1>
            <input type="text" placeholder="presents I need to buy" onChange={(e) => handleChangeInputAdd(e)}></input>
            <button type="button" onClick={handleClickAdd}>Add a present</button>
            <div className={styles.inputContent}>
                {shoppList.map((gift) => {
                    return(
                        <div>
                            <input type="checkbox" value={gift.name} id={gift.id} onChange={(e) => handleChangeCheckbox(e, gift.id)}></input>
                            <label className={`${gift.check ? styles.labelChecked : styles.label}`}>{gift.name}</label>
                        </div>
                    )
                })}
            </div>
            
            
        </div>
    )
}

export default ShoppingList;