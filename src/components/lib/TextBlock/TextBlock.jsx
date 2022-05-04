import React from 'react';
import Title from '../Title/Title';

import './TextBlock.scss';

function TextBlock(props) {

    let className = "text-block"
    className = props.wClass != null ? props.wClass + ` ${className}` : className

    let headingDateInfo = false
    let headingPlaceInfo = false
    let textBlockDescrClass = "text-block__description"
    if (props.data.date != null) {
        headingDateInfo = true
    }
    if (props.data.subtitle != null) {
        headingPlaceInfo = true
    }
    if (headingDateInfo && headingPlaceInfo) {
        textBlockDescrClass = "text-block__description_italic"
    }

    return (
        <div className={className}>
            <div className="text-block__heading TB-heading">
                <Title
                    type="text"
                    wrapperClass="TB-heading__title"
                    heading_lvl={3}
                >
                    {props.data.title}

                    {headingPlaceInfo
                        ? (
                            <span className='place'>{props.data.subtitle}</span>
                        )
                        :
                        null
                    }

                </Title>

                {headingDateInfo
                    ? (
                        <p className="TB-heading__date">
                            {props.data.date}
                        </p>
                    )
                    :
                    null
                }


            </div>

            <div className={textBlockDescrClass}>
                <p>
                    {props.data.content}
                </p>
            </div>

        </div>
    );
}

export default TextBlock;