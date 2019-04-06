import React from 'react';
import './Tag.css';

const tag = (props) => (
    <div className={'tag'}>
        <span>{props.tagText}</span>
    </div>
);

export default tag;