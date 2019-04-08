import React, {Component} from 'react';
import './MyStory.css';

import Storypart1 from './Storypart/impl/Storypart1';
import Storypart2 from './Storypart/impl/Storypart2';
import Storypart3 from './Storypart/impl/Storypart3';
import Storypart4 from './Storypart/impl/Storypart4';
import Storypart5 from './Storypart/impl/Storypart5';

import DownArrows from './img/down_arrows.png';


class MyStory extends Component {
    /** Starts at 1 because the 2010 storypartCount component gets the key value 0 */
    storypartCount = 0;

    storyparts = [
        <Storypart1 key={1} />,
        <Storypart2 key={2} />,
        <Storypart3 key={3} />,
        <Storypart4 key={4} />,
        <Storypart5 key={5} />
    ];

    nextStoryDates = [
        '2011',
        '2012',
        '2013',
        '2014-2016'
    ];

    constructor(props) {
        super(props);
        this.state = {
            stories: [
                this.storyparts[0]
            ],
            nextStoryDate: this.nextStoryDates[0]
        }
    }

    addNewStorypart = () => {
        this.storypartCount++;

        this.setState({
            stories: [...this.state.stories, this.storyparts[this.storypartCount]],
            nextStoryDate: this.nextStoryDates[this.storypartCount]
        });
    };

    render() {
        return (
            <div className="content_container">
                {this.state.stories}

                <div className={'read_more'}
                     onClick={this.addNewStorypart}>
                    <span>{this.state.nextStoryDate}</span>
                    <img className={'down_arrows'} src={DownArrows}/>
                </div>
            </div>
        );
    }
}

export default MyStory;