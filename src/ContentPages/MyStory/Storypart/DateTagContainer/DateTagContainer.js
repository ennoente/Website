import React from 'react';
import './DateTagContainer.css';
import Tag from './Tag/Tag';

const dateTagContainer = (props) => (
    <div className={'date_tag_container'}>
        <h4 className={'date'}>{props.date}</h4>

        {
            props.tags.map((item) => (
                <Tag key={item} tagText={item}/>
            ))
        }
    </div>
);

export default dateTagContainer;