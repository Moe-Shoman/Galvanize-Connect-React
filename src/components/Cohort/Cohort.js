import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import MemberCards from './MemberCards';

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
