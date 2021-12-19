import CountUp from 'react-countup';

function Stats(props) {
    return (
        <div>
            <h3>{<CountUp start={0} end={props.number} duration={2} suffix=" +" separator="," />}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Stats;