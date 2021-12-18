import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import HeroImg from '../images/girl-study.png';

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-longcopy'>
                <h1>We strive for <br />
                    <Typewriter
                        options={{
                            autoStart: true,
                            strings: ['equality', 'quality', 'accessibility', 'education', 'better future'],
                            loop: true
                        }}
                    />
                </h1>
                <p className='description'>We bridge the gap between students who need help outside of classes
                    and nonprofit organizations that offer free educational services.</p>
                <Link to='/sign-up'>
                    <button className='btn btn-full'>Sign Up</button>
                </Link>
            </div>
            <div className='hero-img'>
                <img src={HeroImg} alt='girl studying' />
            </div>
        </div>
    )
}

export default Hero;