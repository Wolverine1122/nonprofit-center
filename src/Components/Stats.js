import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

function Stats(props) {
    return (
        <div>
            <h3>
                {
                    <CountUp start={0} end={props.number} duration={2} suffix=" +" separator=",">
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                }
            </h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Stats;