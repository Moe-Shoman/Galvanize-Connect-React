import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import MemberCards from '../../components/Cohort/MemberCards';

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
