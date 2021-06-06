import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


function Header() {
    // @ts-ignore
    return (
        <>
            <div className={s.header}>
                <NavLink className={s.nav} activeClassName={s.activeNav} to="/pre-junior"> Pre-junior</NavLink>
                <NavLink className={s.nav} activeClassName={s.activeNav} to="/junior">Junior</NavLink>
                <NavLink className={s.nav} activeClassName={s.activeNav} to="/junior-plus"> Junior-plus</NavLink>
                <div className = {s.menuBtn}/>
            </div>

        </>
    )
}

export default Header
