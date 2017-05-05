import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {fetchCohort} from '../../actions';
import {Card, Icon, Image} from 'semantic-ui-react'
import './cohort.css'
import AddCohort from '../Profile/add_cohort'

function mapStateToProps({cohortVal, userData}) {
    return {cohortVal, userData}
}

class MemberCards extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

        firebase.database().ref(`cohorts/${this.props.userData.cohort}`).once("value", (snapshot) => {
            return this.props.fetchCohort(snapshot.val());
        })
    }

    render() {
        if (!this.props.userData.cohort) {
            return (
                <div>
                    <p>Please add your cohort in order to view this page</p>
                    <AddCohort/>
                </div>
            )
        }
        const members = Object.values(this.props.cohortVal);
        const cohortUser = members.map((cohort) => {
            return (
                <div class="card">
                    <Card>
                        <Image src={cohort.photo} size='big'/>
                        <Card.Content>
                            <Card.Header>{cohort.name}</Card.Header>
                        </Card.Content>
                    </Card>
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
