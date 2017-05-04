import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {fetchCohort} from '../../actions';
import {Card, Icon, Image} from 'semantic-ui-react'

function mapStateToProps({cohortVal}) {
    return {cohortVal}
}

class MemberCards extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        firebase.database().ref('cohorts').once("value", (snapshot) => {
            return this.props.fetchCohort(snapshot.val());
        })
    }

    renderCohorMember = (cohortMembers) => {
     if(cohortMembers) {
      const members = Object.values(cohortMembers);
      return members.map((member) => {
        console.log('member is ===================', member.name);
        return (
         <div>
        <Card>
           <Image src={member.photo}/>
           <Card.Content>
               <Card.Header>{member.name}</Card.Header>
           </Card.Content>
       </Card>
       </div>
      )
      })
     }
    }

    render() {
     const cohortUser = this.props.cohortVal.map((cohort) => {
      return (
       <div>
       {this.renderCohorMember(cohort)}
       </div>
      )
     })
        return (
         <div>
          {cohortUser}

         </div>
        )
    }
}

export default connect(mapStateToProps, {fetchCohort})(MemberCards)
