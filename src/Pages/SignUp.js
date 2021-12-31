import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className='sign-up-page'>
            <div className='card signup-card'>
                <h2>Create an account</h2>
                <form action='#' method='POST' className='login-form signup-form'>
                    <div className='signup-form-input'>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name'
                            required
                        />
                        <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Email address'
                            required
                        />
                        <input
                            type='text'
                            name='password'
                            id='password'
                            placeholder='Password'
                            required
                        />
                        <input
                            type='text'
                            name='confirm-password'
                            id='confirm-password'
                            placeholder='Confirm password'
                            required
                        />
                    </div>
                    <div className='signup-form-agreements'>
                        <div className='agreement'>
                            <input type='checkbox' name='terms&conditions' id='terms&conditions' className='checkbox' />
                            <label htmlFor='terms&conditions'>I agree to <a href='https://www.google.com/'>Terms and Conditions</a></label>
                        </div>
                        <div className='agreement'>
                            <input type='checkbox' name='newletters' id='newletters' className='checkbox' />
                            <label htmlFor='newletters'>Subscribe to newletters and other exciting news</label>
                        </div>
                        <div className='signup-form-button'>
                            <button className='btn btn-full'>Create an account</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='cues'>
                <div>
                    <Link to='/sign-in'>Already have an account?</Link>
                </div>
                <div>
                    <a href='/map-search'>Need help?</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp