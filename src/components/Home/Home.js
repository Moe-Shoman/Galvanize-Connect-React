import React, {Component} from 'react';
import Jobs from './Jobs';
import Feeds from './Feed';
import {Segment, Sidebar, Grid} from 'semantic-ui-react';

class Home extends Component {
    render() {
        return (
            <Sidebar.Pusher>
                <Segment basic>
                    <div className='HomeContainer'>
                        <div className='FeedContainer'>
                            <Feeds/>
                        </div>
                        <div className='JobsContainer'>
                            <Jobs/>
                        </div>
                    </div>
                </Segment>
            </Sidebar.Pusher>
        )
    }

}

export default Home;
