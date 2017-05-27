import React, {Component} from 'react';
import { connect } from 'react-redux';
import semantic from 'semantic-ui-react';
import AddCohort from '../AddCohort';
import './profile.css';

const ProfileHeader = ({ userData }) => {
  return (
      <div className="userPro">
        <div className="userName">
          <h1 className="userName">{userData.name}</h1>
          <img className="ui circular image imgPro" src={userData.photo} alt={userData.name} />
        </div>
        <div className="cohortStyle">
          <h3 className="numStyle">{userData.cohort}</h3>
          <div>
            <AddCohort />
          </div>
        </div>
      </div>
    );
};

export default connect(({ userData }) => ({ userData }))(ProfileHeader);
