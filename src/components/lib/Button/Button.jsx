import React from 'react';

import './Button.scss';

function Button(props) {
    let className = "button"
    className = props.wrapperClass != null ?  props.wrapperClass + ` ${className}`: className
    
    switch (props.type) {
        case "default":
            className += " _default"
            break;

        case "control":
            className += " _control"
            break;
    
        default:
            break;
    }

    return (
        <button className={className}>
            {props.children}
        </button>
    );
}

export default Button;