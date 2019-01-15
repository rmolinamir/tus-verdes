import React from 'react';
// CSS
import classes from './ContentHeader.module.css';
// JSX
import Tendency from '../Tendency/Tendency';

const contentHeader = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>
                <span>
                    <h1>1 Dolar</h1> 
                    <span className={classes.Currency}>($)</span>
                    <h1 className={classes.Equal}>=</h1> 
                    <h1>{Number(props.VESPerDollar.price).toLocaleString(undefined, {maximumFractionDigits:2})}</h1> 
                    <span className={classes.Currency}>(VES)</span>
                </span>
                <div className={classes.Tendency}>
                        {props.VESPerDollar.tendency === undefined ? null : <Tendency.Arrow tendency={props.VESPerDollar.tendency} />}
                        {props.VESPerDollar.tendency === undefined ? 
                            null : 
                            <Tendency.Info 
                                tendency={props.VESPerDollar.tendency} 
                                relativeDifference={props.VESPerDollar.relativeDifference}
                                relativePercentage={props.VESPerDollar.relativePercentage} />}
                    </div>
            </div>
        </div>
    );
}

export default contentHeader;
