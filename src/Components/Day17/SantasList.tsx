import { useState } from 'react';
import styles from './SantasList.module.css';
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

interface List {
    name: string;
    demeanorChecked: string;
    id: number;
}

const SantasList = () => {
    const [namesList, setNameList] = useState<List[]>([{
        name: "David",
        demeanorChecked: "naughty",
        id: 1
    },
    {
        name: "Roger",
        demeanorChecked: "nice",
        id: 2
    },
    {
        name: "Valerie",
        demeanorChecked: "naughty",
        id: 3
    },
    {
        name: "Sheila",
        demeanorChecked: "nice",
        id: 4
    }]) ;
    const [buttonClicked, setButtonClicked] = useState<Boolean>(false);
    const [demeanorChecked, setDemeanorChecked] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleChangeDemmeanor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDemeanorChecked(e.target.value);
    }

    const handleChangeAddName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    function getRandomId(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClickAdd = () => {
        setNameList([...namesList, {
            name: name,
            demeanorChecked: demeanorChecked,
            id: getRandomId(5, 34537458)
        }])
        setName('')
    }

    const handleClickchangeList = (id: number) => {
        setNameList(
            namesList.map((name: List) =>
            {
                if (name.id === id && name.demeanorChecked === "nice") {
                    return {
                        ...name, demeanorChecked: "naughty"
                    }
                }
                if (name.id === id && name.demeanorChecked === "naughty") {
                    return {
                        ...name, demeanorChecked: "nice"
                    }
                }  
                    return name;
                }
            )
        )
    }

    return (
        <div>
            <h1>Santa's List</h1>
            <div className={styles.lists}>
                <div className={styles.niceList}>
                    <h3 className={styles.nice}>Nice</h3>
                    {namesList.map((name) => {
                        if (buttonClicked && name.demeanorChecked === "nice") {
                            return (
                                <div className={styles.display}>
                                    <p>{name.name}</p>
                                    <button type="button" onClick={() => handleClickchangeList(name.id)}><BiRightArrowAlt/></button>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className={styles.naugthyList}>
                    <h3 className={styles.naugthy}>Naughty</h3>
                    {namesList.map((name) => {
                        if (buttonClicked && name.demeanorChecked === "naughty") {
                            return (
                                <div className={styles.display}>
                                    <button type="button" onClick={() => handleClickchangeList(name.id)}><BiLeftArrowAlt/></button>
                                    <p>{name.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <button type="button" onClick={() => setButtonClicked(true)}>Create list</button>
            <p>Do you want enter a new name?</p>
            <input type="text" placeholder='name' value={name} onChange={(e) => handleChangeAddName(e)}></input>
            <input type="radio" name="demeanor" value="nice" onChange={(e) => {handleChangeDemmeanor(e)}}></input>
            <label>nice</label>
            <input type="radio" name="demeanor" value="naughty" onChange={(e) => {handleChangeDemmeanor(e)}}></input>
            <label>naughty</label>
            <button type="button" onClick={handleClickAdd}>Add</button>
        </div>
    )
};

export default SantasList;