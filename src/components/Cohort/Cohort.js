import React, { Component } from 'react';
import MemberCards from './MemberCards';
import { Sidebar } from 'semantic-ui-react';

// export default class Cohort extends Component {
//   render() {
//     return (
//       <Sidebar.Pusher>
//         <div>
//           <div>
//             <MemberCards />
//           </div>
//         </div>
//       </Sidebar.Pusher>
//     );
//   }
// }

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

// example of functioncal react component

// const component = ({destructor if need new}) => (
//  <div>
//   <h1>{name}</h1>
//  </div>
// )
