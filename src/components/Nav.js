import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='nav_logo'>
                <Link to="/"><img src='/favicon-192x192.png' alt='logo' width='32px' height='32px' style={{borderRadius: '50%'}}/></Link>
            </div>
            <div className='nav_menu'>
                <li><Link to="/repos">Repos</Link></li>
                <li><Link to="/issues">Issues</Link></li>
            </div>
            <div>
            </div>
        </nav>
    );
}

export default Nav;