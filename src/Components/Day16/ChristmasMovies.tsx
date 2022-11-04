import { get } from 'https';
import { useState } from 'react';
import styles from './ChristmasMovies.module.css';

const ChristmasMovies = () => {
    const adultRomance = ["Love actually", "Holidate"]
    const adultAction = ["Die hard", "Uncharted"]
    const childrenRomance = ["Shrek", "Grinch"]
    const childrenAction = ["Captain underpants", "Megamind"]
    const [publicSelected, setPublicSelected] = useState<string>('');
    const [genderSelected, setgenderSelected] = useState<string>('');
    const [movieSelected, setMovieSelected] = useState<string>('');

    const handleChangePublic = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPublicSelected(e.target.value)
    }

    const handleChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setgenderSelected(e.target.value)
    }

    function getRandom(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClickSelectMovie = () => {
        let numRandom = getRandom(0, 1);
        if (publicSelected === "adult" && genderSelected === "romance") {
            const foundMovie = adultRomance.filter((movie: string, index: number) => {
                return numRandom === index;
            })[0];
            setMovieSelected(foundMovie);
            console.log('movie', movieSelected)
        }
        if (publicSelected === "adult" && genderSelected === "action") {
            const foundMovie = adultAction.filter((movie: string, index: number) => {
                return numRandom === index;
            })[0];
            setMovieSelected(foundMovie);
        }

        if (publicSelected === "child" && genderSelected === "romance") {
            const foundMovie = childrenRomance.filter((movie: string, index: number) => {
                return numRandom === index;
            })[0];
            setMovieSelected(foundMovie);
        }
        if (publicSelected === "child" && genderSelected === "action") {
            const foundMovie = childrenAction.filter((movie: string, index: number) => {
                return numRandom === index;
            })[0];
            setMovieSelected(foundMovie);
        }
    }

    return (
        <div className={styles.content}>
            <h1>Christmas movies</h1>
            <p className={styles.nameMovie}>{movieSelected}</p>
            <select onChange={(e) => handleChangePublic(e)}>
                <option>Select public</option>
                <option value="adult">Adult</option>
                <option value="child">Children's</option>
            </select>
            <select onChange={(e) => handleChangeGender(e)}>
                <option>Select gender</option>
                <option value="romance">Romance</option>
                <option value="action">Action</option>
            </select>
            <button type="button" onClick={handleClickSelectMovie}>Select movie</button>
        </div>
    )
};
export default ChristmasMovies;