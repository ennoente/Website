import React from 'react';
import Storypart from "../Storypart";

const storypart1 = () => (
    <Storypart
        scrollDisabled={true}
        date={'2010'}
        tags={
            [
                'Batch',
                'Basic',
                'Command-line'
            ]
        }
        text={'The Beginning of my programming story.\n' +
        'To fix a common graphics bug in Age of Empires II on Winwows 7, before starting the game the explorer.exe has to be killed. Having been doing this for some time, first manually killing the process and starting the game via the Task Manager, my brother’s friend advizes us to just write up a batch file that would kill the explorer.exe and start the game. What I have been doing manually all the time can be automated. “I can tell my computer what to do?”. I am super curious about this “programming” thing and start to experiment with batch files. '}
    />
);

export default storypart1;