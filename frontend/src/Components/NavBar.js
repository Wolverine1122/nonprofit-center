import {Link} from 'react-router-dom'
import Logo from '../logo.svg'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt='logo'/>
                </Link>
            </div>
            <div className='navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/search'>Search Nonprofits</Link>
                <Link to='/sign-in'>Sign In/Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar;