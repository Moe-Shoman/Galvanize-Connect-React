import React from 'react';
import Jobs from './Jobs';
import Feeds from './Feed';
import { Segment, Sidebar } from 'semantic-ui-react';


const home = () => (
  <Sidebar.Pusher>
    <Segment basic>
      <div className="ui grid">
        <div className="eight wide column">
          <Feeds />
        </div>
        <div className="five wide column">
          <Jobs />
        </div>
      </div>
    </Segment>
  </Sidebar.Pusher>
   );

export default home;
