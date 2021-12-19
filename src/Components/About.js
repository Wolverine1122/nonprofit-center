import Lottie from 'react-lottie-player';
import StudyingLottie from '../images/studying-lottie.json';
import Stats from './Stats';
import TextStats from '../Texts/TextStats';

function createStatsEntry(stats) {
    return <Stats key={stats.id} number={stats.number} description={stats.description} />
}

function About() {
    return (
        <div className="about-us">
            <div className="lottie">
                <Lottie loop animationData={StudyingLottie} play style={{ width: 450, height: 450 }} />
            </div>
            <div className="stats-sidebar">
                <h2>We are the #1 platform <br /> for nonprofits</h2>
                {TextStats.map(createStatsEntry)}
            </div>
        </div>
    )
}

export default About;