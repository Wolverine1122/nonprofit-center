import Lottie from 'react-lottie-player';
import StudyingLottie from '../images/studying-lottie.json';

function About() {
    return (
        <div className="about-us">
            <div className="lottie">
                <Lottie loop animationData={StudyingLottie} play style={{ width: 450, height: 450 }} />
            </div>
            <div className="stats-sidebar">
                <h2>We are the #1 platform <br /> for nonprofits</h2>
                <div>
                    <h3>60,000+</h3>
                    <p>users in the nation</p>
                </div>
                <div>
                    <h3>4,000+</h3>
                    <p>visits per month</p>
                </div>
                <div>
                    <h3>10+</h3>
                    <p>companies supporting us</p>
                </div>
            </div>
        </div>
    )
}

export default About;