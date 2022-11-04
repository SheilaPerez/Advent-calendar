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

const CalendarPage = () => {
    return (
        <div>
            <Countdown></Countdown>
            <ChristmasStyle></ChristmasStyle>
            <FixChristmas></FixChristmas>
            <ShoppingList></ShoppingList>
            <WriteCard></WriteCard>
            <Christmassifier></Christmassifier>
            <ChristmasSong></ChristmasSong>
            <ChristmasInMovment></ChristmasInMovment>
            <TurnOnDecoration></TurnOnDecoration>
            <Loading></Loading>
            <ChristmasGallery></ChristmasGallery>
            <GuestList></GuestList>
            <DinnerCalculator></DinnerCalculator>
            <LonelyElf></LonelyElf>
            <FestiveTranslator></FestiveTranslator>
            <ChristmasMovies></ChristmasMovies>
            <SantasList></SantasList>
            <ShoppingGift></ShoppingGift>
            <Desserts></Desserts>
        </div>
    )
}

export default CalendarPage;