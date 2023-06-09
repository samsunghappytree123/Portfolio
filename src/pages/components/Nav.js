import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='nav_logo'>
                <Link href="/"><img src='/favicon-192x192.png' alt='logo' width='32px' height='32px' style={{borderRadius: '50%'}}/></Link>
            </div>
            <div className='nav_menu'>
                <li><Link href="/repositories">Repos</Link></li>
                <li><Link href="/issues">Issues</Link></li>
            </div>
            <div>
            </div>
        </nav>
    );
}

export default Nav;