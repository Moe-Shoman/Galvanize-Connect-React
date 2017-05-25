import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Card, Image } from 'semantic-ui-react';
import { fetchCohort } from '../../actions';
import './cohort.css';
import AddCohort from '../Profile/AddCohort';

class MemberCards extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    firebase.database().ref(`cohorts/${this.props.userData.cohort}`).once('value', snapshot => this.props.fetchCohort(snapshot.val()));
  }

  render() {
    const { cohortVal, userData } = this.props;
    if (!userData.cohort) {
      return (
        <div>
          <p>Please add your cohort in order to view this page</p>
          <AddCohort />
        </div>
      );
    }
    const members = Object.values(cohortVal);
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
