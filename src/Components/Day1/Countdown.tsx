import { useEffect, useState } from "react";

const Countdown = () => {
    const now = new Date();
    const eventDay = new Date("December 24, 2022");
    const [days, setDays] = useState<number>(0);

    useEffect(() => {
        countDown()
    },[])

    const countDown = () => {
        const timeDiff = eventDay.getTime() - now.getTime();
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        setDays(Math.floor(hours / 24));
        console.log('time', days)
    }
    return (
        <div>
            <p>Christmas CountDown</p>
            {days > 0 && <p>{days} days left!</p>}
        </div>
    )
};

export default Countdown;