import React, { useState } from 'react';
import styles from './Message.module.css';

const Message = () => {
    const [message, setMessage] = useState<string>('');

    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }
    return (
        <div className={styles.content}>
            <h1>Message to Santa</h1>
            <div className={styles.messageContainer}>
                <div className={styles.santaClaus}></div>
                <input type="text" className={styles.input} placeholder='writte yout message here' onChange={(e) => handleChangeMessage(e)}></input>
            </div>
            <p>{message}</p>

        </div>
    )
};

export default Message;