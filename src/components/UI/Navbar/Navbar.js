import React from 'react';
// CSS
import classes from './Navbar.module.css';
// JSX
import Logo from '../Logo/Logo';
import Date from './Date/Date';

const navbar = () => {
    return (
        <nav  className={classes.Container}>
            <Logo /> 
            <span className={classes.Name}>Tus Verdes</span>
            <span className={classes.Date}><Date /></span>
        </nav>
    );
}

export default navbar;