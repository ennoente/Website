import React from 'react';
import './Info.css';

function Info(props) {
    return (
        <div className="info">
            <img className="info_icon" src={props.icon} />
            <span>{props.infoText}</span>
        </div>
    );
}

export default Info;