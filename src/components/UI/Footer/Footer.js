import React from 'react';
// CSS
import classes from './Footer.module.css';
import ContactMe from '../ContactMe/ContactMe';

const footer = () => {
    return (
        <footer className={classes.Footer}>
            <span className={classes.Text}>Contácteme</span>
            <ContactMe.Gmail href="mailto:rmolinamir@gmail.com" />
            <ContactMe.Github href="https://github.com/rmolinamir/tus-verdes" />
        </footer>
    )
}

export default footer;
