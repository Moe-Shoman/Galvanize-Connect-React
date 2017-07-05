import React, { Component } from 'react';
import { connect } from 'react-redux';
import semantic from 'semantic-ui-react';
import AddCohort from '../AddCohort';
import { Grid } from 'semantic-ui-react';
import './profile.css';

const ProfileHeader = ({ userData }) => (
  <Grid className="userPro" stackable>
    <Grid.Row>
      <div className="userName">
        <h1>{userData.name}</h1>
        <img className="ui circular image imgPro" src={userData.photo} alt={userData.name} />
      </div>
    </Grid.Row>
  </Grid>
    );

export default connect(({ userData }) => ({ userData }))(ProfileHeader);
