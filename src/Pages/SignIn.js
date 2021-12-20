import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className='sign-in-page'>
            <div className="card">
                <h2>Log in to your account</h2>
                <form action="#" method="POST" className="login-form">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        required
                    />
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                    />
                    <button className="btn btn-full">Sign in</button>
                </form>
            </div>
            <div className="cues">
                <div>
                    <Link to='/sign-up'>Create an account</Link>
                </div>
                <div>
                    <a href="https://www.google.com/">Forgot password?</a>
                </div>
            </div>
        </div>
    )
}

export default SignIn