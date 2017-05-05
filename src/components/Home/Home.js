import React, {Component} from 'react';
import Jobs from './Jobs';
import Feeds from './Feed';

import {Segment, Sidebar} from 'semantic-ui-react';
class Home extends Component {
    render() {
        return (
            <Sidebar.Pusher>
                <Segment basic>
                    <div>
                        <Feeds/>
                        <Jobs/>
                    </div>
                </Segment>
            </Sidebar.Pusher>
        )
    }

}

export default Home;
