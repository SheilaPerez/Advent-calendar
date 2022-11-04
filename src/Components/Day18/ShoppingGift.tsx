import { useState } from 'react';
import styles from './ShoppingGift.module.css';
interface Shooping {
    name: string;
    icon: string;
    check: boolean;
}
const ShoppingGift = () => {
    const [list, setList] = useState<Shooping[]>([{
        name: "Candles",
        icon: '',
        check: false
    }, {
        name: "Decorations",
        icon: '',
        check: false
    }, {
        name: "Chocolate",
        icon: '',
        check: false
    }, {
        name: "Socks",
        icon: '',
        check: false
    }]);
    const icons = ["snowman.png", "jengibre.png", "elfo.png", "luces1.png"]

    const random = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let numRandom = random(0, 3)
        const randomIcon = icons.filter((icon: string, index: number) => {
            return numRandom === index
        })[0]
        setList(
            list.map((item, i) => {
                if (index === i) {
                    return { ...item, icon: randomIcon, check: e.target.checked};
                }
                return item;
            })
        )
    }

    return (
        <div className={styles.content}>
            <h1>Christmas shopping list</h1>
            <div className={styles.listContent}>
                {list.map((item, index) => {
                    return (
                        <div>
                            {item.check 
                                ?
                                <div>
                                    <img src={item.icon} className={styles.icon}></img>
                                    <label>{item.name}</label>
                                </div>
                                :
                                <div>
                                    <input type="checkbox" value={item.name} onChange={(e) => handleChangeChecked(e, index)}></input>
                                    <label>{item.name}</label>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
};

export default ShoppingGift;