import React, {Component} from 'react';
import './Storypart.css';

import DateTagContainer from './DateTagContainer/DateTagContainer';
import TextContainer from './TextContainer/TextContainer';

class Storypart extends React.Component {
    constructor(props) {
        super(props);
        this.divToFocus = React.createRef();
    }

    componentDidMount() {
        if (!this.props.scrollDisabled) {
            this.divToFocus.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    render() {
        return (
            <div ref={this.divToFocus} className='storypart'>
                <DateTagContainer date={this.props.date} tags={this.props.tags}/>
                <TextContainer text={this.props.text}/>
            </div>
        );
    }
}

export default Storypart;