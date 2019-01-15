import React from 'react';
// CSS
import classes from './Error.module.css';

const error = (props) => {
    return (
        <div className={classes.Container}>
            <span className={classes.Text}>Algo salió mal. Haga clic en el botón de abajo para volver a intentar.</span>
            <div onClick={props.onClick} className={classes.Refresh}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 512 512" 
                    style={{enableBackground: "new 0 0 512 512"}} 
                    width="86px" 
                    height="86px">
                    <g>
                        <path d="M482.195,226.196C482.195,101.471,380.725,0,256.001,0S29.805,101.471,29.805,226.196c0,7.409,6.007,13.416,13.416,13.416    s13.416-6.008,13.416-13.416c0-109.93,89.434-199.363,199.363-199.363s199.363,89.434,199.363,199.363    c0,109.928-89.434,199.362-199.363,199.362h-23.276l33.282-37.255c4.937-5.525,4.458-14.007-1.067-18.944    c-5.525-4.937-14.008-4.457-18.944,1.068l-47.576,53.255c-7.788,8.718-7.788,21.866,0,30.584l47.576,53.255    c2.651,2.968,6.322,4.478,10.01,4.478c3.181,0,6.375-1.126,8.934-3.41c5.526-4.937,6.004-13.419,1.067-18.944l-33.282-37.255    h23.276C380.725,452.39,482.195,350.919,482.195,226.196z" fill="#484848" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default error;