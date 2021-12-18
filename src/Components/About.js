import test from '../images/girl-study.png'

function About() {
    return (
        <div className="about-us">
            <div className="lottie">
                <img src={test} alt='children growing' />
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