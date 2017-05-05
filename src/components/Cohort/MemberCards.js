import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {fetchCohort} from '../../actions';
import {Card, Icon, Image} from 'semantic-ui-react'

function mapStateToProps({cohortVal, userData}) {
    return {
     cohortVal,
     userData
    }
}

class MemberCards extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
<<<<<<< HEAD
     const num = 'G42'
        firebase.database().ref(`cohorts/${num}`).once("value", (snapshot) => {
=======
     // const cohortNum = this.props.userData.cohort
        firebase.database().ref('cohorts').once("value", (snapshot) => {
>>>>>>> d9f7fe3d15598f397637b5e1b9cb204c2122adcb
            return this.props.fetchCohort(snapshot.val());
        })
        // firebase.database().ref('cohorts').once("value", (snapshot) => {
        //     return this.props.fetchCohort(snapshot.val());
        // })
    }

    renderCohorMember = (cohortMembers) => {
<<<<<<< HEAD
     // console.log('cohortMembers is =============== ', this.props.userData);
=======
>>>>>>> d9f7fe3d15598f397637b5e1b9cb204c2122adcb
        if (cohortMembers) {
            const members = Object.values(cohortMembers);
            return members.map((member) => {
                return (
                    <div class="card">
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
