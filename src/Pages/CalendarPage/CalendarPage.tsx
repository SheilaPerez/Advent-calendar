import styles from './CalendarPage.module.css';
import Countdown from '../../Components/Day1';
import ChristmasStyle from '../../Components/Day2';
import FixChristmas from '../../Components/Day3';
import ShoppingList from '../../Components/Day4';
import WriteCard from '../../Components/Day5';
import Christmassifier from '../../Components/Day6';
import ChristmasSong from '../../Components/Day7';
import ChristmasInMovment from '../../Components/Day8';
import TurnOnDecoration from '../../Components/Day9';
import Loading from '../../Components/Day10';
import ChristmasGallery from '../../Components/Day11';
import GuestList from '../../Components/Day12';
import DinnerCalculator from '../../Components/Day13';
import LonelyElf from '../../Components/Day14';
import FestiveTranslator from '../../Components/Day15';
import ChristmasMovies from '../../Components/Day16';
import SantasList from '../../Components/Day17';
import ShoppingGift from '../../Components/Day18';
import Desserts from '../../Components/Day19';
import Snowman from '../../Components/Day20';
import Speedometer from '../../Components/Day21';
import StressBuster from '../../Components/Day22';
import Message from '../../Components/Day23';
import SleighLaunch from '../../Components/Day24';
import CalendarDays from '../CalendarDays';
import { useState } from 'react';
import Modal from '../../Components/Modal';

const CalendarPage = () => {
    const [openDay, setOpenDay] = useState<number>(0);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleClickOpenDay = (day: number) => {
        setOpenDay(day);
        setOpenModal(true);
    }

    const getModalComponent = () => {
            switch(openDay) {
                case 1:
                    return <Countdown></Countdown>;
                case 2:
                    return <ChristmasStyle></ChristmasStyle>;
                case 3:
                    return <FixChristmas></FixChristmas>;
                case 4:
                    return <ShoppingList></ShoppingList>;
                case 5:
                    return <WriteCard></WriteCard>;
                case 6:
                    return <Christmassifier></Christmassifier>;
                case 7:
                    return <ChristmasSong></ChristmasSong>;
                case 8:
                    return <ChristmasInMovment></ChristmasInMovment>;
                case 9:
                    return <TurnOnDecoration></TurnOnDecoration>;
                case 10:
                    return <Loading></Loading>;
                case 11:
                    return <ChristmasGallery></ChristmasGallery>;
                case 12:
                    return <GuestList></GuestList>;
                case 13:
                    return <DinnerCalculator></DinnerCalculator>;
                case 14:
                    return <LonelyElf></LonelyElf>;
                case 15:
                    return <FestiveTranslator></FestiveTranslator>;
                case 16:
                    return <ChristmasMovies></ChristmasMovies>;
                case 17:
                    return <SantasList></SantasList>;
                case 18:
                    return <ShoppingGift></ShoppingGift>;
                case 19:
                    return <Desserts></Desserts>;
                case 20:
                    return <Snowman></Snowman>;
                case 21:
                    return <Speedometer></Speedometer>;
                case 22:
                    return <StressBuster></StressBuster>;
                case 23:
                    return <Message></Message>;
                case 24:
                    return <SleighLaunch></SleighLaunch>;
            }
    }

    return (
        <div className={styles.content}>
            <CalendarDays handleClickOpenDay={(day) => handleClickOpenDay(day)}></CalendarDays>
            {isOpenModal && <Modal handleClickCloseModal={() => setOpenModal(false)}>
                {
                    getModalComponent()
                }
            </Modal>}
        </div>
    )
}

export default CalendarPage;