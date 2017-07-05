import React from 'react';
import Articles from '../../components/Home/Articles';
import Feeds from '../../components/Home/Feed';
import './Home.css';


const Home = () => (
  <div id="home">
    <div id="feed">
      <Feeds />
    </div>
    <div id="articles" >
      <Articles />
    </div>
  </div>
   );

export default Home;
