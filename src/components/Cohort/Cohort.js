import React, { Component } from 'react';
import MemberCards from './MemberCards';
import { Sidebar } from 'semantic-ui-react';

const cohort = () => (
  <Sidebar.Pusher>
    <div>
      <div>
        <MemberCards />
      </div>
    </div>
  </Sidebar.Pusher>
   );

export default cohort;


// const component = ({destructor if need new}) => (
//  <div>
//   <h1>{name}</h1>
//  </div>
// )
