import React from 'react';
import Title from '../Title/Title';
import "./SimpleDescription.scss"

function SimpleDescription(props) {
    const data = props.data
    let className = "simple-description"
    className = props.wrapperClass != null ?  props.wrapperClass + ` ${className}`: className
    return (
        <div className={className}>
            <Title 
                type="heading" 
                wrapperClass="simple-description__title"
                heading_lvl = {data.HL}
            >
                {data.title}
            </Title>
            <div className="simple-description__content">
                <p>{data.content}</p>
            </div>
        </div>
    );
}

export default SimpleDescription;