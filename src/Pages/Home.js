import Hero from '../Components/Hero';
import About from '../Components/About';
import Process from '../Components/Process';

function Home() {
    return (
        <div className='homepage'>
            <Hero />
            <About />
            <Process />
        </div>
    )
}

export default Home