import React from "react";
import classes from './Button.module.css';

const Button = props => {
    return (
        <button
            className={classes.button}
            type={props.type || 'button'} //the button type is dynamically set so the type would always come from the parent component
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;