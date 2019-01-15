import React from 'react';
// Number parser
import numberWIthCommas from '../../../../shared/numberWithCommas';
// CSS
import classes from './Price.module.css';
// JSX
import Tendency from '../../Tendency/Tendency';

const price = (props) => {
    return (
        <div className={classes.Container}> 
            <div className={classes.Display}>{props.display}</div>
            <div className={classes.Price}>
                <span>{numberWIthCommas(props.price)} {props.bIsDollar ? '($)' : '(VES)'}</span>
                <span className={classes.Tendency}>
                {props.tendency === undefined ? null : <Tendency.Arrow tendency={props.tendency} />}
                {props.tendency === undefined ? 
                    null : 
                    <Tendency.Info 
                        tendency={props.tendency} 
                        relativeDifference={props.relativeDifference}
                        relativePercentage={props.relativePercentage} />}
                </span>
            </div>
        </div>
    )
}

export default price;
