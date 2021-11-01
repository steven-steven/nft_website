import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <p className="font-robotoBold text-center text-xs md:text-2xl pt-4 md:pt-16 w-2/3 lg:w-1/3">
        <span className="font-forward"> {days} </span> Days
        <span className="font-forward"> {hours} </span> Hours
        <span className="font-forward"> {minutes} </span> Minutes
        <span className="font-forward"> {seconds} </span> Seconds
    </p>
};

export default function countDown() {
    const releaseDate = Date.parse('15 Nov 2021 23:00:00 GMT')
    return (
        <div id="intro" className="pt-8 font-forward font-normal">
            <div className="flex flex-col place-items-center">
                <div className="pt-4 md:pt-4 text-s md:text-2xl">Launch starts in</div>
                <Countdown date={releaseDate} renderer={renderer} />
            </div>
        </div>
    )
}
