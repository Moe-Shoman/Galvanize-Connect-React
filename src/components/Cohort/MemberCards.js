import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { fetchCohort } from '../../actions';
import { Card, Image } from 'semantic-ui-react';
import './cohort.css';
import AddCohort from '../Profile/add_cohort';

// function mapStateToProps({ cohortVal, userData }) {
//   return { cohortVal, userData };
// }

class MemberCards extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    firebase.database().ref(`cohorts/${this.props.userData.cohort}`).once('value', snapshot => this.props.fetchCohort(snapshot.val()));
  }

  render() {
    if (!this.props.userData.cohort) {
      return (
        <div>
          <p>Please add your cohort in order to view this page</p>
          <AddCohort />
        </div>
      );
    }
    const members = Object.values(this.props.cohortVal);
    const cohortUser = members.map(cohort => (
      <div className="card">
        <Card>
          <Image src={cohort.photo} size="big" />
          <Card.Content>
            <Card.Header>{cohort.name}</Card.Header>
          </Card.Content>
        </Card>
      </div>
        ));
    return (
      <div>
        {cohortUser}
      </div>
    );
  }
}

export default connect(({ cohortVal, userData }) => ({ cohortVal, userData }), { fetchCohort })(MemberCards);
