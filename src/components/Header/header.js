import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>Jane Tracy</Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header