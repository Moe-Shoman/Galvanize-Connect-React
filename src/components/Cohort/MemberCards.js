import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {fetchCohort} from '../../actions';
import { Card, Icon, Image } from 'semantic-ui-react'

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
       console.log('member inside of renderCohorMember is ', member.photo);
      })
     }
    }

    render() {
      const cohortMems = this.props.cohortVal.map((member) => {
       return (
        this.renderCohorMember(member)
       )
      })

        return (
         <Card>
             <Image src={cohortMems.photo}/>
             <Card.Content>
                 <Card.Header>{cohortMems.name}</Card.Header>
             </Card.Content>
         </Card>
        )
    }
}

export default connect(mapStateToProps, {fetchCohort})(MemberCards)
