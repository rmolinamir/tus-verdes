import React from 'react';
// CSS
import classes from './Disclaimer.module.css';
// JSX
import Icon from './Icon/Icon';

const disclaimer = () => {
    return (
        <div className={classes.Container}>
            <span className={classes.Text}>
            <i className={classes.Icon}><Icon /></i> Los precios son calculados a tiempo real, basados en los precios publicados por <a target='_blank' rel="noopener noreferrer" className={classes.Link}  href='https://localbitcoins.com/'>LocalBitcoins.com</a>
            </span>
        </div>
    );
}

export default disclaimer;