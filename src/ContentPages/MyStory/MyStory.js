import React, {Component} from 'react';
import './MyStory.css';

import Storypart1 from './Storypart/impl/Storypart1';
import Storypart2 from './Storypart/impl/Storypart2';
import Storypart3 from './Storypart/impl/Storypart3';
import Storypart4 from './Storypart/impl/Storypart4';
import Storypart5 from './Storypart/impl/Storypart5';
import Storypart6 from './Storypart/impl/Storypart6';
import Storypart7 from './Storypart/impl/Storypart7';
import Storypart8 from './Storypart/impl/Storypart8';
import Storypart9 from './Storypart/impl/Storypart9';
import Storypart10 from './Storypart/impl/Storypart10';
import Storypart11 from './Storypart/impl/Storypart11';

import DownArrows from './img/down_arrows.png';


class MyStory extends Component {
  /** Starts at 1 because the 2010 storypartCount component gets the key value 0 */
  storypartCount = 0;

  storyparts = [
    <Storypart1 key={1} />,
    <Storypart2 key={2} />,
    <Storypart3 key={3} />,
    <Storypart4 key={4} />,
    <Storypart5 key={5} />,
    <Storypart6 key={6} />,
    <Storypart7 key={7} />,
    <Storypart8 key={8} />,
    <Storypart9 key={9} />,
    <Storypart10 key={10} />,
    <Storypart11 key={11} />
  ];

  nextStoryDates = [
    '2011',
    '2012',
    '2013',
    '2014-2016',
    'December 2016',
    'January-July 2017',
    'August 2017',
    'October-December 2018',
    'February-March 2019',
    'November 2019-Now'
  ];

  constructor(props) {
    super(props);
    this.state = {
      stories: [
        this.storyparts[0]
      ],
      nextStoryDate: this.nextStoryDates[0],
      readMoreClass: 'read_more'
    }
  }

  /**
   * Adds a new storypart each time the 'Read More' button is pressed.
   * Deletes the Read More button when end of story is reached.
   */
  addNewStorypart = () => {
    this.storypartCount++;

    this.setState({
      stories: [...this.state.stories, this.storyparts[this.storypartCount]],
      nextStoryDate: this.nextStoryDates[this.storypartCount]
    });

    // Delete the 'Read More' button
    if (this.storypartCount === this.storyparts.length -1) {
      this.setState({
        readMoreClass: 'read_more_disabled'
      })
    }
  };

  render() {
    return (
      <div className="content_container my_story">
        {this.state.stories}

        <div className={this.state.readMoreClass}
             onClick={this.addNewStorypart}>
          <span>{this.state.nextStoryDate}</span>
          <img className={'down_arrows'} src={DownArrows} />
        </div>
      </div>
    );
  }
}

export default MyStory;