import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='nav_logo'>
                <Link href="/"><Image src='/favicon-192x192.png' alt='logo' width={32} height={32} style={{borderRadius: '50%'}} /></Link>
            </div>
            <div className='nav_menu'>
                <li><Link href="/repositories">Repos</Link></li>
                <li><Link href="/notice">Notice</Link></li>
            </div>
            <div>
            </div>
        </nav>
    );
}

export default Nav;