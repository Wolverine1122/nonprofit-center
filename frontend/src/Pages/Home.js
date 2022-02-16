import Hero from '../Components/Hero';
import About from '../Components/About';
import Process from '../Components/Process';
import Contact from '../Components/Contact';

function Home() {
    return (
        <div className='homepage'>
            <Hero />
            <About />
            <Process />
            <Contact />
        </div>
    )
}

export default Home