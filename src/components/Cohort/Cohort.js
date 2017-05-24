import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import MemberCards from './MemberCards';

const Cohort = () => (
  <Sidebar.Pusher>
    <div>
      <div>
        <MemberCards />
      </div>
    </div>
  </Sidebar.Pusher>
   );

export default Cohort;


// const component = ({destructor if need new}) => (
//  <div>
//   <h1>{name}</h1>
//  </div>
// )
