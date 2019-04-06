import React from 'react';
import './TextContainer.css';

const textContainer = (props) => (
    <div className={'text_container'}>
        <span>{props.text}</span>
    </div>
);

export default textContainer;