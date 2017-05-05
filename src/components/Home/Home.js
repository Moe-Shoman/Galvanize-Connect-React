import React, { Component } from 'react';
import Jobs from './Jobs';
import Feeds from './Feed';


class Home extends Component {
 render() {
  return (
   <div>
    <Feeds/>
    <Jobs />
   </div>
  )
 }
}

export default Home;
