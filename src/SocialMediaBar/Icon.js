import React from 'react';

function Icon(props) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <img className="smb_pic" src={props.icon} />
        </a>
    )
}

export default Icon;