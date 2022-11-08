import { FC, useState } from 'react';
import styles from './CalendarDays.module.css';
interface Props {
    handleClickOpenDay: (day: number) => void;


}
const CalendarDays: FC<Props> = ({handleClickOpenDay}) => {

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Advent Calendar</h1>
            <div className={styles.windowsContent}>
                <div className={styles.window} onClick={() => handleClickOpenDay(7)}>
                    <h2 className={styles.num}>7</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(18)}>
                    <h2 className={styles.num}>18</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(13)}>
                    <h2 className={styles.num}>13</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(9)}>
                    <h2 className={styles.num}>9</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(20)}>
                    <h2 className={styles.num}>20</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(10)}>
                    <h2 className={styles.num}>10</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(1)}>
                    <h2 className={styles.num}>1</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(22)}>
                    <h2 className={styles.num}>22</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(3)}>
                    <h2 className={styles.num}>3</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(17)}>
                    <h2 className={styles.num}>17</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(2)}>
                    <h2 className={styles.num}>2</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(21)}>
                    <h2 className={styles.num}>21</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(11)}>
                    <h2 className={styles.num}>11</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(6)}>
                    <h2 className={styles.num}>6</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(14)}>
                    <h2 className={styles.num}>14</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(24)}>
                    <h2 className={styles.num}>24</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(5)}>
                    <h2 className={styles.num}>5</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(12)}>
                    <h2 className={styles.num}>12</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(4)}>
                    <h2 className={styles.num}>4</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(23)}>
                    <h2 className={styles.num}>23</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(15)}>
                    <h2 className={styles.num}>15</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(19)}>
                    <h2 className={styles.num}>19</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(16)}>
                    <h2 className={styles.num}>16</h2>
                </div>
                <div className={styles.window} onClick={() => handleClickOpenDay(8)}>
                    <h2 className={styles.num}>8</h2>
                </div>
                <div className={styles.image}>

                </div>
            </div>
        </div>
    )
};

export default CalendarDays;