import React from 'react';
// CSS
import classes from './Prices.module.css';
// JSX
import Price from './Price/Price';

const prices = (props) => {
    const prices = props.prices;
    return (
        <div className={classes.Wrapper}>
            {/* 1 Dolar */}
            <div className={classes.Container}>
                <div className={classes.Title}>
                    <h1>1 Dolar</h1> 
                    <span className={classes.Currency}>(VES)</span>
                </div>
                <div className={classes.Prices}>
                    {Object.values(prices.VESPerDollar).reverse().map( (properties, index) => {
                        return (
                            <Price key={index} {...properties } />
                        );
                    })}
                </div>
            </div>

            {/* 1 Bitcoin (VES) */}
            <div className={classes.Container}>
                <div className={classes.Title}>
                    <h1>1 Bitcoin</h1> 
                    <span className={classes.Currency}>(VES)</span>
                </div>
                <div className={classes.Prices}>
                    {Object.values(prices.VES).reverse().map( (properties, index) => {
                        return (
                            <Price key={index} {...properties } />
                        );
                    })}
                </div>
            </div>

            {/* 1 Bitcoin ($) */}
            <div className={classes.Container}>
                <div className={classes.Title}>
                    <h1>1 Bitcoin</h1> 
                    <span className={classes.Currency}>($)</span>
                </div>
                <div className={classes.Prices}>
                    {Object.values(prices.USD).reverse().map( (properties, index) => {
                        return (
                            <Price key={index} {...properties } bIsDollar />
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default prices;
