import React, { Component } from 'react';
import Jobs from './Jobs';
import Feed from './Feed';


class Home extends Component {
 render() {
  return (
   <div>
    <Feed/>
    <Jobs />
   </div>
  )
 }
}

export default Home;
