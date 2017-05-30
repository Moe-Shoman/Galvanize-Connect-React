import React from 'react';
import Jobs from '../../components/Home/Jobs';
import Feeds from '../../components/Home/Feed';
import { Segment, Sidebar } from 'semantic-ui-react';


const Home = () => (
  // <Sidebar.Pusher>
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
  // </Sidebar.Pusher>
   );

export default Home;
