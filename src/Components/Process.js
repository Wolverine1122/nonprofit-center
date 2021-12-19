import ScheduleImg from '../images/icons/schedule.svg';
import RegisterImg from '../images/icons/register.svg';
import SearchImg from '../images/icons/search.svg';

function Process() {
    return (
        <div className="process-section">
            <div className="process-text">
                <h2>Get help for anything</h2>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint elit amet minim mollit non deserunt ullamco est
                </p>
            </div>

            <div className="process-steps-row">
                <div>
                    <div className='process-img'>
                        <img src={RegisterImg} alt='register' />
                    </div>
                    <div className="process-steps-text">
                        <h3>Register</h3>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder
                            text commonly used to demonstrate the visual form of a document or
                            a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='process-img'>
                        <img src={SearchImg} alt='search' />
                    </div>
                    <div className="process-steps-text">
                        <h3>Search</h3>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder
                            text commonly used to demonstrate the visual form of a document or
                            a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='process-img'>
                        <img src={ScheduleImg} alt='schedule' />
                    </div>
                    <div className="process-steps-text">
                        <h3>Schedule</h3>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder
                            text commonly used to demonstrate the visual form of a document or
                            a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process;