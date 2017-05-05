import React, {Component} from 'react';
import MemberCards from './MemberCards'
import {Sidebar} from 'semantic-ui-react'

export default class Cohort extends Component {
    render() {
      return (
       <Sidebar.Pusher>
        <div>
         <div>
          <MemberCards/>
         </div>
        </div>
       </Sidebar.Pusher>
      )
    }
}
